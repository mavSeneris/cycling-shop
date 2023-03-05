import React from 'react'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='left'>
        <div>
          <span><a href={`/collection`}>All</a></span>
        </div>
        <div>
          <span><a href={`/men`}>Men</a></span>
        </div>
        <div>
          <span><a href={`/women`}>Women</a></span>
        </div>
      </div>
      <div className='center'><a href={'/'}>MAAV</a></div>
      <div className='right'>
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
        <div className='shopping-cart'>
          <a href={'/shopping-cart'}>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1.4em" width="1.4em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M14 5H2v9a1 1 0 001 1h10a1 1 0 001-1V5zM1 4v10a2 2 0 002 2h10a2 2 0 002-2V4H1z" clipRule="evenodd"></path><path d="M8 1.5A2.5 2.5 0 005.5 4h-1a3.5 3.5 0 117 0h-1A2.5 2.5 0 008 1.5z"></path></svg>
          </a>
          <div className='item-count'>7</div>
        </div>
      </div>
    </div>
  )
}
