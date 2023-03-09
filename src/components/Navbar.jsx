import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({ bag, setBag }) {
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

        <div className='shopping-cart'>
          <a href={'/shopping-cart'}>
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="1.4em" width="1.4em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M14 5H2v9a1 1 0 001 1h10a1 1 0 001-1V5zM1 4v10a2 2 0 002 2h10a2 2 0 002-2V4H1z" clipRule="evenodd"></path><path d="M8 1.5A2.5 2.5 0 005.5 4h-1a3.5 3.5 0 117 0h-1A2.5 2.5 0 008 1.5z"></path></svg>
          </a>
          {bag.length > 0 && <div className='item-count'>{bag.length}</div>}
        </div>
      </div>
    </div>
  )
}
