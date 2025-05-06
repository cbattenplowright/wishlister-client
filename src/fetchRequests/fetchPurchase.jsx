

export const fetchPurchase = async (
    userAccountId,
    wishlistProductId,
    productId,
    wishlistId,
    isPurchased,
    email,
    credentials,
    setChecked
) => {
    try {
      const response = await fetch(
        // `https://wishlister-h2tf.onrender.com/api/wishlists/${wishlistContext.wishlistId}/products/${wishlistProductItem.productId}/purchase`,
        `http://localhost:8080/api/wishlist-products/${userAccountId}/${wishlistProductId}`,
        {
          method: "PUT",
          headers: {
            Authorization: `Basic ${btoa(
              `${email}:${credentials}`
            )}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            wishlistId: wishlistId,
            productId: productId,
            isPurchased: !isPurchased,
          }),
        }
      );

      if (!response.ok) {
        setChecked(!isPurchased);
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const res = await response.json();
      console.log("Purchase updated:", res);
      setChecked(res.purchased);
    } catch (err) {
      console.error("Error fetching purchase:", err);
    }
  };