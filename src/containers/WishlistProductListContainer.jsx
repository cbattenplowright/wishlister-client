import React, { useEffect, useState } from "react";
import WishlistProductList from "../components/wishlist-product-list-components/WishlistProductList";
import { mockWishlistProductItems } from "../mock-data/MockWishlistProductItems";
import { useAuth } from "../hooks/AuthProvider";
import { useWishlist } from "../hooks/WishlistProvider";

const WishlistProductListContainer = () => {
  const auth = useAuth();
  const wishlistContext = useWishlist();
  const [wishlistProductItems, setWishlistProductItems] = useState(null);

  const fetchWishlist = async () => {
    try {
      if (!auth.user) {
        console.error("No user found");
        return;
      }

      console.log(
        `Fetching wishlistProducts for user credentials:, ${auth.user.email}, ${auth.credentials}`
      );

      const response = await fetch(
        // `https://wishlister-h2tf.onrender.com/api/wishlists/${auth.user.userAccountId}`,
        `http://localhost:8080/api/wishlists/${auth.user.userAccountId}/${wishlistContext.wishlistId}`,
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
      console.log('res: ', res);
      if (res) {
        console.log('WishlistProductItems have been set to: ' + res);
        setWishlistProductItems(res);
      }
    } catch (err) {
      console.error("Error fetching wishlist:", err);
    }
  };

  useEffect(() => {
    if (auth.user) {
      console.log(`WishlistProductListContainer rendering with user, ` + auth.user);
      fetchWishlist();
    }
  }, [auth.user]);

  // const wishlistProductItemsForWishlist1 = wishlistProductItems.filter((wishlistProductItem) => wishlistProductItem.wishlistId === 1);

  console.log('wishlistName is:', wishlistProductItems?.wishlistName);
  return (
    <div className="wishlist-product-list-container">
      <WishlistProductList
        // wishlistName={wishlistProductItems.wishlistName}
        wishlistProductItems={wishlistProductItems}
      />
    </div>
  );
};

export default WishlistProductListContainer;
