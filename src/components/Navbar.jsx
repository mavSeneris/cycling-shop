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
          <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14 5H2v9a1 1 0 001 1h10a1 1 0 001-1V5zM1 4v10a2 2 0 002 2h10a2 2 0 002-2V4H1z" clip-rule="evenodd"></path><path d="M8 1.5A2.5 2.5 0 005.5 4h-1a3.5 3.5 0 117 0h-1A2.5 2.5 0 008 1.5z"></path></svg>
        </div>
      </div>
    </div>
  )
}
