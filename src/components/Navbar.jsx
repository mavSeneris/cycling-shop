import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='left'>
        <div>
          <span>All</span>
        </div>
        <div>
          <span>Men</span>
        </div>
        <div>
          <span>Women</span>
        </div>
      </div>
      <div className='center'>MAAV</div>
      <div className='right'>
        <div className='login'>
          <span>Login</span>
        </div>
        <div className='sign-up'>
          <span>Sign-up</span>
        </div>
        <div className='shopping-cart'>
          <span>Cart</span>
        </div>
      </div>
    </div>
  )
}
