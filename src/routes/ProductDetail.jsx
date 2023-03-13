import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { collections } from '../data';

export default function ProductsDetail({ item }) {
  // Get the bag and the function to update it from the router context
  const [bag, setBag] = useOutletContext();

  // Function to add an item to the cart
  function addToCart(id) {
    // Check if the item is already in the bag
    const existingItem = bag.find(item => item.id === id);

    if (existingItem) {
      // If the item is already in the bag, update its quantity and price
      setBag(currentItems => {
        return currentItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1, price: item.price };
          } else {
            return item;
          }
        });
      });
    } else {
      // If the item is not in the bag, add it with a quantity of 1 and its original price
      const itemToAdd = collections.find(item => item.id === id);
      setBag(currentItems => [...currentItems, { ...itemToAdd, quantity: 1, price: itemToAdd.price }]);
    }
  }

  // Render the product details and the button to add it to the cart
  return (
    <div>
      <div className='product-container'>
        <div className='product-images'>
          <img src={item.img1} />
          <img src={item.img2} />
        </div>
        <div className="product-details">
          <div className='product-info'>
            <h2 className='item-name'>{item.name}</h2>
            <p className='item-description'>
              {/* Add a description of the product */}
              The Evolve 3D Pro Air Jersey is a high-performance, lightweight jersey featuring bold graphic elements and sustainable materials for the ultimate experience. Design in our signature Pro-Fit with contoured panelling, a low profile collar and longer sleeve length for comfort and performance. Featuring ultra-lightweight mesh side panels, micro-perforated chest and back panels, and air-mesh sleeves for maximum airflow. The lazer cut perforated pockets offer added breathability and moisture-wicking technology to keep you fresh. The material selection includes mostly recycled yarns, OEKO-TEX® certified hem and bluesign® APPROVED fabrications.
            </p>
            <h3 className='item-price'> ${item.price}.00 AUD</h3>
            <button onClick={() => addToCart(item.id)}>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};
