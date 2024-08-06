import React, { useEffect, useState, useCallback } from "react";
import withAuth from "./Auth/Withauth";
import { FiFolderPlus } from "react-icons/fi";
import "./Dashboard.css";
import Newfolder from "./Newfolder";
import { IoAdd } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import debounce from "lodash/debounce";
import axios from "axios";

const saveToLocalStorage = debounce((folders, folderData) => {
  try {
    localStorage.setItem("folders", JSON.stringify(folders));
    localStorage.setItem("folderData", JSON.stringify(folderData));
  } catch (error) {
    console.error("Error saving to localStorage:", error);
  }
}, 300);

function Dashboard() {
  const navigate = useNavigate();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [folders, setFolders] = useState([]);
  const [activeFolder, setActiveFolder] = useState(null);
  const [folderData, setFolderData] = useState({});
  const [username, setUsername] = useState("");

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login");
          return;
        }
        const response = await axios.get(
          "https://formbot-server.onrender.com/dashboard",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const data = response.data;
        setUsername(data.user.username);
        localStorage.setItem("username", data.user.username);
      } catch (error) {
        console.error("Error fetching username", error);
        navigate("/login");
      }
    };
    fetchUsername();
  }, [navigate]);

  const fetchFolders = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(
        "https://formbot-server.onrender.com/folder",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const data = response.data;
      console.log("Fetched folders:", data);

      // Extract folder names and create folderData object
      const folders = data.map((folder) => ({
        name: folder.foldername,
        id: folder._id,
      }));
      const folderDataObj = data.reduce((acc, folder) => {
        acc[folder.foldername] = folder.forms;
        return acc;
      }, {});

      setFolders(folders);
      setFolderData(folderDataObj);
    } catch (error) {
      console.error("Error fetching folders:", error);
    }
  };
  useEffect(() => {
    fetchFolders();
  }, []);

  const saveData = useCallback(() => {
    saveToLocalStorage(folders, folderData);
  }, [folders, folderData]);

  useEffect(() => {
    saveData();
  }, [saveData]);

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue === "settings") {
      navigate("/setting");
    } else if (selectedValue === "logout") {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      sessionStorage.clear();
      navigate("/login");
    }
  };

  const handleCreateFolder = async (folderName) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        "https://formbot-server.onrender.com/newfolder",
        { name: folderName },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const newFolder = response.data;
      setFolders((prevFolders) => [
        ...prevFolders,
        { name: newFolder.foldername, id: newFolder._id },
      ]);
      setFolderData((prevFolderData) => ({
        ...prevFolderData,
        [newFolder.foldername]: newFolder.forms || [],
      }));
      //   console.log("Updated folderData:", newFolderData);
      //   return newFolderData;
      // });

      fetchFolders();
    } catch (error) {
      console.error(
        "Error creating folder:",
        error.response?.data || error.message
      );
    }
  };

  const handleDeleteFolder = async (index) => {
    console.log("Deleting folder at index:", index);
    const folderToDelete = folders[index];
    if (!folderToDelete || !folderToDelete.id) {
      console.log("Invalid folder or folder ID");
      return;
    }
    try {
      const token = localStorage.getItem("token");
      console.log("Deleting folder with ID:", folderToDelete.id);
      await axios.delete(
        `https://formbot-server.onrender.com/delete/${folderToDelete.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setFolders((prevFolders) => {
        const updatedFolders = prevFolders.filter((_, i) => i !== index);
        console.log("Updated folders after deletion:", updatedFolders);
        return updatedFolders;
      });

      setFolderData((prevFolderData) => {
        const newFolderData = { ...prevFolderData };
        delete newFolderData[folderToDelete.name];
        console.log("Updated folderData after deletion:", newFolderData);
        return newFolderData;
      });
      if (activeFolder === folderToDelete.name) {
        setActiveFolder(null);
      }
    } catch (error) {
      console.error("Error deleting folder:", error);
    }
  };

  const handleDeleteForm = async (formId) => {
    if (activeFolder && activeFolder.id) {
      try {
        const token = localStorage.getItem("token");
        await axios.delete(
          `https://formbot-server.onrender.com/${activeFolder.id}/deleteform/${formId}`,
          { headers: { Authorization: `Bearer ${token}` } }
        );

        // Update the folderData state
        setFolderData((prevFolderData) => {
          const folderForms = prevFolderData[activeFolder.name];
          if (!Array.isArray(folderForms)) {
            console.error("Folder forms is not an array:", folderForms);
            return prevFolderData; // Return unchanged if not an array
          }
          const updatedForms = folderForms.filter(
            (form) => form._id !== formId
          );
          return {
            ...prevFolderData,
            [activeFolder.name]: updatedForms,
          };
        });

        // Update the activeFolder state
        setActiveFolder((prevActiveFolder) => {
          if (!prevActiveFolder || !Array.isArray(prevActiveFolder.forms)) {
            console.error(
              "Active folder or its forms is not valid:",
              prevActiveFolder
            );
            return prevActiveFolder; // Return unchanged if not valid
          }
          return {
            ...prevActiveFolder,
            forms: prevActiveFolder.forms.filter((form) => form._id !== formId),
          };
        });

        // Optionally update the folders state if needed
        setFolders((prevFolders) =>
          prevFolders.map((folder) => {
            if (folder.id === activeFolder.id) {
              return {
                ...folder,
                forms: Array.isArray(folder.forms)
                  ? folder.forms.filter((form) => form._id !== formId)
                  : [],
              };
            }
            return folder;
          })
        );
      } catch (error) {
        console.error("Error deleting form:", error);
      }
    } else {
      console.error("No active folder selected or folder ID is missing");
    }
  };
  const handleFolderClick = async (folder) => {
    setActiveFolder({
      ...folder,
      forms: Array.isArray(folder.forms) ? folder.forms : [],
    });
  };

  const handleCreateFormbot = async () => {
    if (activeFolder) {
      const newFormbot = `New Form ${folderData[activeFolder.name].length + 1}`;

      try {
        const token = localStorage.getItem("token");
        const response = await axios.post(
          `https://formbot-server.onrender.com/${activeFolder.id}/createform`,
          { formname: newFormbot },
          { headers: { Authorization: `Bearer ${token}` } }
        );

        // Assuming the response includes the updated folder data
        const updatedFolder = response.data;

        setFolderData((prevFolderData) => ({
          ...prevFolderData,
          [activeFolder.name]: updatedFolder.forms,
        }));

        setFolders((prevFolders) =>
          prevFolders.map((folder) =>
            folder.id === activeFolder.id
              ? { ...folder, forms: updatedFolder.forms }
              : folder
          )
        );

        // Ensure the active folder remains selected
        setActiveFolder((prevActiveFolder) => ({
          ...prevActiveFolder,
          forms: updatedFolder.forms,
        }));
      } catch (error) {
        console.error("Error creating formbot:", error);
      }
    }
  };
  const handleToWorkspace = (formId) => {
    localStorage.setItem("formId", formId);
    navigate("/workspace");
  };

  return (
    <div className="dashboard_container">
      <div className="dashboard_header">
        <select name="" id="dash_list" onChange={handleSelectChange}>
          <option value="dashboard" className="lists">
            {username} workspace
          </option>
          <option value="settings" className="lists">
            Settings
          </option>
          <option value="logout" className="lists">
            Log Out
          </option>
        </select>
      </div>
      <div className="dashboard_body">
        <div className="folder">
          <button
            className="create_folder"
            onClick={() => {
              setIsDialogOpen(true);
            }}
          >
            <FiFolderPlus style={{ left: 10, marginRight: "8px" }} />
            Create a folder
          </button>
          {folders && folders.length > 0 ? (
            folders.map((folder, index) => (
              <div
                key={folder.id} // Use folder.id as the key
                className={`folder-item ${
                  activeFolder === folder.name ? "active" : ""
                }`}
                onClick={() => handleFolderClick(folder)}
              >
                {folder.name}{" "}
                <RiDeleteBin6Line
                  style={{ color: "red", marginLeft: "5px", marginTop: "2px" }}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteFolder(index);
                  }}
                />
              </div>
            ))
          ) : (
            <p>No folders available.</p>
          )}
        </div>

        <div className="typebot">
          <button
            className="create_typebot"
            onClick={handleCreateFormbot}
            disabled={!activeFolder}
          >
            <IoAdd
              style={{ fontSize: "30px", fontWeight: "900", padding: "25px" }}
            />
            Create a typebot
          </button>
          <div className="bots_list">
            {activeFolder && folderData[activeFolder.name] && (
              <div className="formbot-list">
                {folderData[activeFolder.name].map((form) => (
                  <div key={form._id} className="new_form">
                    <span onClick={() => handleToWorkspace(form._id)}>
                      {form.formname}
                    </span>
                    <RiDeleteBin6Line
                      className="del"
                      onClick={() => handleDeleteForm(form._id)}
                    />
                  </div>
                ))}
              </div>
            )}
            {(!activeFolder || !folderData[activeFolder.name]) && (
              <p>No folder selected </p>
            )}
          </div>
        </div>
      </div>
      <Newfolder
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
        onCreateFolder={handleCreateFolder}
      />
    </div>
  );
}

export default withAuth(Dashboard);
