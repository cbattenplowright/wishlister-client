import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [credentials, setCredentials] = useState(null);
  const navigate = useNavigate();

  const loginUser = async (data) => {
    console.log(data.email, data.password);
    try {
      const response = await fetch(
        "http://localhost:8080/api/users/login",
        // "https://wishlister-h2tf.onrender.com/api/users/login",
        {
          method: "GET",
          headers: {
            Authorization: `Basic ${btoa(`${data.email}:${data.password}`)}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const res = await response.json();
      console.log(res);
      if (res) {
        setUser(res);
        setCredentials(data.password);
        navigate("/wishlists");
        return;
      }
      throw new Error(res.message || "Login failed");
    } catch (err) {
      if (err.message.includes("HTTP error!")) {
        alert("Login failed - please check your credentials");
      } else {
        alert("Network error - please try again later");
      }
      console.error(err);
    }
  };

  const logoutUser = () => {
    setUser(null);
    setCredentials(null);
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, credentials, setUser, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
