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

  const createNewWishlistProduct = async (newProduct) => {
    if (!auth.user) {
      console.error("No user found");
      return;
    }

    console.log(
      `Creating new wishlistProduct for user credentials:, ${auth.user.email}, ${auth.credentials}`
    );

    // if creating new product and attaching to wishlist need to
    // create product with API call
    // then attach to wishlist with API call

    const createProduct = async (newProduct) => {
      const response = await fetch(
        // `https://wishlister-h2tf.onrender.com/api/products/new`,
        `http://localhost:8080/api/products/new`,
        {
          method: "POST",
          headers: {
            Authorization: `Basic ${btoa(
              `${auth.user.email}:${auth.credentials}`
            )}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            newProduct
          }),
        }
      )
    }

    const createWishlistProduct = async () => {

      const response = await fetch(
        // `https://wishlister-h2tf.onrender.com/api/wishlists/${auth.user.userAccountId}`,
        `http://localhost:8080/api/wishlists/${auth.user.userAccountId}/${wishlistContext.wishlistId}/new`,
        {
          method: "POST",
          headers: {
            Authorization: `Basic ${btoa(
              `${auth.user.email}:${auth.credentials}`
            )}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userId: auth.user.userAccountId,
            wishlistId: wishlistContext.wishlistId,
            productId: 1,
          }),
        }
      )
    }
  }

  // const wishlistProductItemsForWishlist1 = wishlistProductItems.filter((wishlistProductItem) => wishlistProductItem.wishlistId === 1);

  console.log('wishlistName is:', wishlistProductItems?.wishlistName);
  return (
    <div className="wishlist-product-list-container">
      <WishlistProductList
        // wishlistName={wishlistProductItems.wishlistName}
        wishlistProductItems={wishlistProductItems}
        createNewWishlistProduct={createNewWishlistProduct}
      />
    </div>
  );
};

export default WishlistProductListContainer;
