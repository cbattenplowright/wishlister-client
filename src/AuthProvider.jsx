import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    const loginUser = async (data) => {
        try {
          const response = await fetch("your-api-endpoint/auth/login", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          });
          const res = await response.json();
          if (res.data) {
            setUser(res.data.user);
            navigate("/dashboard");
            return;
          }
          throw new Error(res.message);
        } catch (err) {
          console.error(err);
        }
      };

    return ( 
        <AuthContext.Provider>{children}</AuthContext.Provider>
    );
}

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
}