import "./App.css";
import LandingPage from "./Pages/landingPage/LandingPage";
import Signup from "./Pages/LoginandSignupPage/Signup";
import Login from "./Pages/LoginandSignupPage/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Setting from "./Pages/Setting/Setting";
import Workspace from "./Pages/Workspace/Workspace";
import ThemeSelector from "./Pages/Workspace/pages/ThemeSelector";
import Response from "./Pages/Workspace/pages/Response";
import Chat from "./Pages/Chat/Chat";
import { useState } from "react";
function App() {
  const [theme, setTheme] = useState("light");
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/client-bot" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/setting" element={<Setting />} />
          <Route path="/workspace" element={<Workspace />} />
          <Route path="/theme" element={<ThemeSelector />} />
          <Route path="/flow" element={<Workspace />} />
          <Route path="/response" element={<Response />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
