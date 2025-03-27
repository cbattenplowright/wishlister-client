import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const loginUser = async (data) => {
    try {
      const response = await fetch(
        "https://wishlister-h2tf.onrender.com/api/users/2e883599-d579-4525-8f85-a6e357974d20",
        {
          method: "GET",
          headers: {
            "Authorization": `Basic ${btoa(`${data.email}:${data.password}`)}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const res = await response.json();
      if (res.data) {
        setUser(res.data.user);
        navigate("/wishlists");
        return;
      }
      throw new Error(res.message);
    } catch (err) {
      console.error(err);
    }
  };

  const logoutUser = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};
