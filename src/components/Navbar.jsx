import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { nanoid } from 'nanoid'

export default function Navbar({ bag, setBag, isLoggedIn, username, setUsername, setIsLoggedIn }) {
  const [showBag, setShowBag] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const [totalPrice, setTotalPrice] = useState()
  const [showMessage, setShowMessage] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const location = useLocation()
  const navigate = useNavigate()

  const handleClick = () => {
    setIsChecked(false);
  }

  // Calculate the total price of all items in the shopping bag using reduce.
  useEffect(() => {
    const totalItemsPrice = bag.reduce((accumulator, current) =>
      accumulator + current.price, 0)
    setTotalPrice(totalItemsPrice)
  }, [bag])

  // Calculate the total price of all items in the shopping bag, 
  // taking into account their quantities.
  const totalItemPrice = bag.reduce((total, item) =>
    total + item.quantity * item.price, 0)

  // Calculate the total number of items in the shopping bag by summing their quantities.
  const totalQuantity = bag.reduce((accumulator, currentItem) =>
    accumulator + currentItem.quantity, 0)

  // Toggle the visibility of the shopping bag.
  function toggleBag() {
    setShowBag(prevShowBag => !prevShowBag)
    console.log(showBag)
  }

  // Remove a specified item from the shopping bag.
  function deleteBagItem(event, itemId) {
    event.stopPropagation()
    setBag(currentBagItems => currentBagItems.filter(item => item.id !== itemId))
  }

  // Increment the quantity of a specified item in the shopping bag.
  function handleAddQuantity(itemId) {
    const updatedItems = [...bag]
    const itemIndex = updatedItems.findIndex(item => item.id === itemId)
    updatedItems[itemIndex].quantity += 1
    setBag(updatedItems)
  }

  // Decrement the quantity of a specified item in the shopping bag, 
  function handleSubtractQuantity(itemId) {
    const updatedItems = [...bag]
    const itemIndex = updatedItems.findIndex(item => item.id === itemId)
    updatedItems[itemIndex].quantity -= 1
    // and remove it if the quantity reaches zero.
    if (updatedItems[itemIndex].quantity === 0) {
      updatedItems.splice(itemIndex, 1)
    }
    setBag(updatedItems)
  }

  function handleLogOut() {
    const willLogout = confirm("Are you sure you want to logout?")
    if (willLogout === true) {
      setIsLoggedIn(false)
      setUsername("")
      alert('Logged out!')
      navigate('/')
    } else {
      alert('Cancelled!')
    }
  }

  const handleMouseEnter = () => {
    setShowMessage(true);
  };

  const handleMouseLeave = () => {
    setShowMessage(false);
  };

  const bagItems = bag.map(item =>
    <div className="bag-item-container"
      key={nanoid()}
    >
      <img src={item.img1} className="bag-item-image" />
      <div className="shopping-bag-item-text">
        <h5>{item.name}</h5>
        <p>{item.category}</p>

        <div className='item-details'>
          <div className='quantity'>
            <button onClick={() => { handleAddQuantity(item.id) }}>+</button>
            <span>{item.quantity}</span>
            <button onClick={() => { handleSubtractQuantity(item.id) }}>-</button>
          </div>

          <p className="price">${item.quantity * item.price}.00</p>

        </div>
      </div>
      <div >

      </div>
      <div className='delete-icon' onClick={(event) => deleteBagItem(event, item.id)}>
        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 1024 1024" height="1.2em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path d="M360 184h-8c4.4 0 8-3.6 8-8v8h304v-8c0 4.4 3.6 8 8 8h-8v72h72v-80c0-35.3-28.7-64-64-64H352c-35.3 0-64 28.7-64 64v80h72v-72zm504 72H160c-17.7 0-32 14.3-32 32v32c0 4.4 3.6 8 8 8h60.4l24.7 523c1.6 34.1 29.8 61 63.9 61h454c34.2 0 62.3-26.8 63.9-61l24.7-523H888c4.4 0 8-3.6 8-8v-32c0-17.7-14.3-32-32-32zM731.3 840H292.7l-24.2-512h487l-24.2 512z"></path></svg>
      </div>
    </div>
  );



  return (
    <div className='navbar'>
      <div className='left'>
        <div className='nav-menu'>
          <div>
            <span><Link to={`/collection`}>All</Link></span>
          </div>
          <div>
            <span><Link to={`/men`}>Men</Link></span>
          </div>
          <div>
            <span><Link to={`/women`}>Women</Link></span>
          </div>
          {isAdmin && <div>
            <span><Link to={`/admin`}>Dashboard</Link></span>
          </div>}
        </div>

        <div className="burger-menu">
          <input
            type="checkbox"
            className="burger-toggle"
            id="burger-toggle"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <label htmlFor="burger-toggle" className="burger-icon">
            <span></span>
            <span></span>
            <span></span>
          </label>
          <nav className="burger-nav">
            <div>
              <span><Link to={`collection`} onClick={handleClick}>All</Link></span>
            </div>
            <div>
              <span><Link to={`men`} onClick={handleClick}>Men</Link></span>
            </div>
            <div>
              <span><Link to={`women`} onClick={handleClick}>Women</Link></span>
            </div>
          </nav>
        </div>

      </div>
      <div className='center' onClick={handleClick}>
        <Link to={'/'}>MAAV</Link>
      </div>
      <div className='right'>
        {!isLoggedIn ? <div className='auth' onClick={handleClick}>
          <div className='sign-in'>
            <Link to='/login'>
              <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.48em" width="1.48em" xmlns="http://www.w3.org/2000/svg"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </Link>
          </div>
        </div> : <div className='username'>
          {username}
        </div>
        }
        {isLoggedIn &&
          <div
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleLogOut}
          >
            <div className='user-initial'

            >
              {username[0].toUpperCase()}
            </div>
            {showMessage && (
              <div className="logout-message">Click to log out.</div>
            )}

          </div>

        }

        {isLoggedIn && <div className='logout-icon' onClick={handleLogOut}>
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="1.2em" width="1.4em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M5 22a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3h-2V4H6v16h12v-2h2v3a1 1 0 0 1-1 1H5zm13-6v-3h-7v-2h7V8l5 4-5 4z"></path></g></svg>
        </div>}

        <div className='shopping-cart' onClick={toggleBag}>
          <a href={'#'}>
            <svg onClick={handleClick} stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1.4em" width="1.2em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M14 5H2v9a1 1 0 001 1h10a1 1 0 001-1V5zM1 4v10a2 2 0 002 2h10a2 2 0 002-2V4H1z" clipRule="evenodd"></path><path d="M8 1.5A2.5 2.5 0 005.5 4h-1a3.5 3.5 0 117 0h-1A2.5 2.5 0 008 1.5z"></path></svg>
          </a>
          {totalQuantity > 0 && <div className='item-count'>{totalQuantity}</div>}
        </div>
      </div>
      {showBag && totalQuantity > 0 && <div className='bag' >
        <h4>Your Shopping Bag</h4>
        <div className="bag-item-container-wrapper">{bagItems}</div>
        <div className="items-total-price-container">
          <div className="items-text-wrapper">
            <p>Bag total:</p>
            <p>Delivery</p>
          </div>
          <div className="items-text-wrapper">
            <p>${totalItemPrice}.00</p>
            <p>$4.59</p>
          </div>
        </div>

        <div className="items-total-price-container sub-total">
          <div className="items-text-wrapper">
            <h4>Subtotal:</h4>
          </div>
          <div className="items-text-wrapper">
            <h4>{`$${totalItemPrice + 4.59}`}</h4>
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
