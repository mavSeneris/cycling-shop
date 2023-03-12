import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { nanoid } from 'nanoid'


export default function Navbar({ bag, setBag }) {
  const [showBag, setShowBag] = useState(false)
  const [totalPrice, setTotalPrice] = useState(0)

  function toggleBag() {
    setShowBag(prevShowBag => !prevShowBag)
    console.log(showBag)
  }

  function deleteBagItem(event, itemId) {
    event.stopPropagation()
    setBag(currentBagItems =>
      currentBagItems.filter(item => item.id !== itemId))
  }

  useEffect(() => {
    const initialTotalPrice = 0
    const totalItemsPrice = bag.reduce((accumulator, current) =>
      accumulator + current.price, initialTotalPrice)
    setTotalPrice(totalItemsPrice)
  })

  const totalQuantity = bag.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.quantity;
  }, 0);

  const bagItems = bag.map(item =>
    <div className="bag-item-container"
      key={nanoid()}
    >
      <img src={item.img1} className="bag-item-image" />
      <div className="shopping-bag-item-text">
        <h5>{item.name}</h5>
        <p>{item.category}</p>
        <small>Quantity: {item.quantity}</small>
        <p className="price">{`$${item.price}.00`}</p>
      </div>
      <div className='delete-icon' onClick={(event) => deleteBagItem(event, item.id)}>
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path></svg>
      </div>
    </div>
  );



  return (
    <div className='navbar'>
      <div className='left'>
        <div>
          <span><Link to={`/collection`}>All</Link></span>
        </div>
        <div>
          <span><Link to={`/men`}>Men</Link></span>
        </div>
        <div>
          <span><Link to={`/women`}>Women</Link></span>
        </div>
      </div>
      <div className='center'><Link to={'/home'}>MAAV</Link></div>
      <div className='right'>
        <div className='auth'>
          <div className='login'>
            <span>
              <a href={`/login`}>Login</a>
            </span>
          </div>
          <div className='sign-up'>
            <span>
              <a href={`/sign-up`}>Sign-up</a>
            </span>
          </div>
        </div>

        <div className='shopping-cart' onClick={toggleBag}>
          <a href={'#'}>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1.4em" width="1.4em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M14 5H2v9a1 1 0 001 1h10a1 1 0 001-1V5zM1 4v10a2 2 0 002 2h10a2 2 0 002-2V4H1z" clipRule="evenodd"></path><path d="M8 1.5A2.5 2.5 0 005.5 4h-1a3.5 3.5 0 117 0h-1A2.5 2.5 0 008 1.5z"></path></svg>
          </a>
          {totalQuantity > 0 && <div className='item-count'>{totalQuantity}</div>}
        </div>
      </div>
      {showBag && totalQuantity > 0 && <div className='bag'>
        <h4>Your Shopping Bag</h4>
        <div className="bag-item-container-wrapper">{bagItems}</div>
        <div className="items-total-price-container">
          <div className="items-text-wrapper">
            <p>Bag total:</p>
            <p>Delivery</p>
          </div>

          <div className="items-text-wrapper">
            <p>${totalPrice}.00</p>
            <p>$4.59</p>
          </div>
        </div>

        <div className="items-total-price-container sub-total">
          <div className="items-text-wrapper">
            <h4>Subtotal:</h4>
          </div>
          <div className="items-text-wrapper">
            <h4>{`$${totalPrice + 4.59}`}</h4>
          </div>
        </div>
        <div className="button-center">
          <button
            className="checkout-button">
            Proceed to Checkout
          </button>
        </div>
      </div>}
    </div>
  )
}
