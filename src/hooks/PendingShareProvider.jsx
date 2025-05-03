import { useContext, createContext, useState, useEffect } from "react";
import { useAuth } from "./AuthProvider";

const PendingShareContext = createContext();

const PendingShareProvider = ({ children }) => {
  const [pendingShares, setPendingShares] = useState([]);
  const auth = useAuth();

  const fetchPendingShares = async () => {
    if (!auth.user) {
      console.error("No user found");
      return;
    }

    try {
      const response = await fetch(
        // `https://wishlister-h2tf.onrender.com/api/wishlists/pending-shares/${auth.user.userAccountId}`,
        `http://localhost:8080/api/wishlists/pending-shares/${auth.user.userAccountId}`,
        {
          method: "GET",
          headers: {
            Authorization: `Basic ${btoa(
              `${auth.user.email}:${auth.credentials}`
            )}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const res = await response.json();
      if (res) {
        setPendingShares(res);
      }
    } catch (err) {
      console.error("Error fetching pending shares:", err);
    }
  };

  const value = {
    pendingShares,
    setPendingShares,
    fetchPendingShares,
  };

  useEffect(() => {
    if (auth.user) {
      fetchPendingShares();
    }
  }, [auth.user]);

  return (
    <PendingShareContext.Provider value={value}>
      {children}
    </PendingShareContext.Provider>
  );
};

export default PendingShareProvider;

export const usePendingShare = () => {
  return useContext(PendingShareContext);
};
