import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const checkAuth = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login");
        } else {
          try {
            setLoading(false);
          } catch (error) {
            console.error("Token verification error:", error);
            localStorage.removeItem("token");
            navigate("/login");
          }
        }
      };

      checkAuth();
    }, [navigate]);

    if (loading) {
      return <div>Loading...</div>;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
