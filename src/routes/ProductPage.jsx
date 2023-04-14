import React, { useState, useEffect } from "react";
import { useOutletContext, useParams } from "react-router-dom";
import ProductDetail from "../routes/ProductDetail";

export default function ProductPage() {
  const [
    bag,
    setBag,
    isLoggedIn,
    setIsLoggedIn,
    password,
    setPassword,
    username,
    setUsername,
  ] = useOutletContext();
  const [products, setProducts] = useState(null);
  const params = useParams();

  useEffect(() => {
    fetch(`/api/products`)
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <div className="product-page-container">
      {products && // Add conditional rendering to check if products is not null
        products.map((item) => {
          // Render the ProductDetail component only for the item with matching ID
          if (params.id == item.id) {
            // Pass the item as a prop to ProductDetail component
            // Use item.id as the key for the component
            return (
              <ProductDetail item={item} key={item.id} username={username} />
            );
          }
          // Return null for other items to avoid rendering unnecessary components
          return null;
        })}
    </div>
  );
}
