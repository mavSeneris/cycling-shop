import React from 'react';
import { collections } from '../data';
import { useLocation } from 'react-router-dom';
import ProductDetail from '../routes/ProductDetail';

export default function ProductPage() {
  const location = useLocation();
  // Extract the ID from the URL using the pathname property
  const id = location.pathname.split('/')[2];
  console.log(location.pathname.split('/')[2])
  
  return (
    <div className='product-page-container'>
      {collections.map((item) => {
        // Render the ProductDetail component only for the item with matching ID
        if (id == item.id) {
          // Pass the item as a prop to ProductDetail component
          // Use item.id as the key for the component
          return <ProductDetail item={item} key={item.id} />;
        }
        // Return null for other items to avoid rendering unnecessary components
        return null;
      })}
    </div>
  );
}

