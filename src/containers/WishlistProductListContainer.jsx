import React, { useEffect, useState } from "react";
import WishlistProductList from "../components/wishlist-product-list-components/WishlistProductList";
import { mockWishlistProductItems } from "../mock-data/MockWishlistProductItems";
import { useAuth } from "../hooks/AuthProvider";
import { useWishlist } from "../hooks/WishlistProvider";

const WishlistProductListContainer = () => {
  const auth = useAuth();
  const wishlistContext = useWishlist();
  const [wishlistProductItems, setWishlistProductItems] = useState(null);

  const prepareUrl = (urlString) => {
    if (!urlString) return '';

    if (!/^https?:\/\//.test(urlString)) {
      return `http://${urlString}`;
    }

    try {
      const url = new URL(urlString);
      return url.toString();
    } catch (error) {
      console.error("Invalid URL:", urlString);
      return '';
    }
  }

  const createProduct = async (newProduct) => {

    console.log(`Creating newProduct:`, newProduct)
    const newProductObject = JSON.stringify(newProduct);
    console.log(`New product object:`, newProductObject);

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
          // TODO is it possible to use a map to go through the newProduct object and create a key: value pair for the JSON string
          productName: newProduct.productName,
          userId: auth.user.userAccountId,
          price: Number(newProduct.price),
          url: prepareUrl(newProduct.url),
          imageUrl: prepareUrl(newProduct.imageUrl),
          priority: newProduct.prioritySelection,
          description: newProduct.description,
          wishlistProducts: []
        })
      }
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const res = await response.json();

    // JSON response example:
    // {
    //     "productId": 6,
    //     "productName": "iPhone 19",
    //     "userId": "0f05abdb-07eb-40c4-8c02-6f3f43cd1b9f",
    //     "price": 1599,
    //     "url": "https://www.testUrl.com",
    //     "imageUrl": "https://www.testImageUrl.com",
    //     "dateAdded": "2025-04-23",
    //     "wishlistProductIds": []
    // }
    console.log("New product created: ", res);
    return res;
  }

  const createWishlistProduct = async (newWishlistProduct) => {

    const response = await fetch(
      // `https://wishlister-h2tf.onrender.com/api/wishlists/${auth.user.userAccountId}`,
      // `http://localhost:8080/api/wishlists/${auth.user.userAccountId}/${wishlistContext.wishlistId}/new`,
      `http://localhost:8080/api/wishlist-products/new`,
      {
        method: "POST",
        headers: {
          Authorization: `Basic ${btoa(
            `${auth.user.email}:${auth.credentials}`
          )}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          productId: newWishlistProduct.productId,
          wishlistId: wishlistContext.wishlistId,
          isPurchased: false
        }),
      }
    )

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const res = await response.json();
  }

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

    const newProductToCreate = await createProduct(newProduct);
    // const newWishlistProduct = await createWishlistProduct(newProduct);
    // console.log("New wishlistProduct created: ", newWishlistProduct);
    // // setWishlistProductItems(newWishlistProduct);
    // // setWishlistProductItems(mockWishlistProductItems);
    // // setWishlistProductItems(newProduct);
    const newWishlistProduct = await createWishlistProduct(newProductToCreate);
    fetchWishlist();
  }

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
