import React from 'react';
import {NavLink} from 'react-router-dom'

class NavBar extends React.Component {

  logout = () => {
    console.log("logout button pressed")
    localStorage.clear()
    this.props.clearAppState()
  }

  render() {
    // console.log(localStorage.user)
    const smallNavBar = (
      localStorage.token? 
      // if user IS logged in, show logout, omit login and register
      (<ul className="nav">
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
          <NavLink to="/" onClick={this.logout} >Logout</NavLink>
        </li>
      </ul>)
      :
      // if user is not logged in, show login and register
      (<ul className="nav">
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
      </ul>)
    )

    return (smallNavBar)
  }
};



export default NavBar;