import React, { useEffect, useState } from "react";
import WishlistProductList from "../components/wishlist-product-list-components/WishlistProductList";
import { mockWishlistProductItems } from "../mock-data/MockWishlistProductItems";
import { useAuth } from "../hooks/AuthProvider";
import { useWishlist } from "../hooks/WishlistProvider";

const WishlistProductListContainer = () => {
  const auth = useAuth();
  const wishlist = useWishlist();
  const [wishlistProductItems, setWishlistProductItems] = useState(null);

  const fetchWishlist = async () => {
    try {
      if (!auth.user) {
        console.error("No user found");
        return;
      }

      console.log(
        `Fetching wishlist for user credentials:, ${auth.user.email}, ${auth.credentials}`
      );

      const response = await fetch(
        // `https://wishlister-h2tf.onrender.com/api/wishlists/${auth.user.userAccountId}`,
        `http://localhost:8080/api/wishlists/${auth.user.userAccountId}/${wishlist.wishlistId}`,
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
        setWishlistProductItems(res);
        console.log(res);
      }
    } catch (err) {
      console.error("Error fetching wishlist:", err);
    }
  };

  useEffect(() => {
    if (auth.user) {
      console.log(auth.user);
      fetchWishlist();
    }
  }, [auth.user]);

  // const wishlistProductItemsForWishlist1 = wishlistProductItems.filter((wishlistProductItem) => wishlistProductItem.wishlistId === 1);

  return (
    <div className="wishlist-product-list-container">
      <WishlistProductList
        wishlistProductItems={wishlistProductItems}
        wishlistName={"Wishlist no.1"}
      />
    </div>
  );
};

export default WishlistProductListContainer;
