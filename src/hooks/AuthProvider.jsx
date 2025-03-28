import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const loginUser = async (data) => {
    console.log(data.email, data.password);
    try {
      const response = await fetch(
        // "http://localhost:8080/api/users/2e883599-d579-4525-8f85-a6e357974d20",
        "https://wishlister-h2tf.onrender.com/api/users/2e883599-d579-4525-8f85-a6e357974d20",
        {
          method: "GET",
          headers: {
            Authorization: `Basic ${btoa(`${data.email}:${data.password}`)}`,
            "Content-Type": "application/json",
          },
          credentials: "include"
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const res = await response.json();
      console.log(res);
      if (res) {
        setUser(res.data);
        navigate("/wishlists");
        alert("Login successful");
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
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ user, setUser, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
