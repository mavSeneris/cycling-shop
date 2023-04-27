import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function AdminLayout() {
  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
  }

  return (
    <div className='admin-layout'>
      <div className='admin-layout-links'>
        <NavLink
          to="."
          end
          style={({ isActive }) => isActive ? activeStyles : null}
        >
          Dashboard
        </NavLink>
        <NavLink
          to="income"
          style={({ isActive }) => isActive ? activeStyles : null}
        >
          Income
        </NavLink>
        <NavLink
          to="products"
          style={({ isActive }) => isActive ? activeStyles : null}
        >
          Products
        </NavLink>
        <NavLink
          to="reviews"
          style={({ isActive }) => isActive ? activeStyles : null}
        >
          Reviews
        </NavLink>
      </div>
      <div className='admin-layout-outlet'>
        <Outlet />
      </div>
    </div>
  )
}

