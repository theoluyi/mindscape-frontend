import React from 'react';
import {NavLink} from 'react-router-dom'

const NavBar = () => {

  const logout = () => {
    console.log("logout button pressed")
    localStorage.clear()
    // this step still requires a refresh but for now that's good enough
    // this feature is more for easy testing not for UI
  }

  return(
    <ul className="nav">
      <li>
        <NavLink to="/">Welcome</NavLink>
      </li>
      <li>
        <NavLink to="/meditate">Meditate</NavLink>
      </li>
      <li>
        <NavLink to="/sessions">Sessions</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/" onClick={logout} >Logout</NavLink>
      </li>
    </ul>
  )
};

export default NavBar;