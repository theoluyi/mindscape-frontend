import React from 'react';
import {NavLink} from 'react-router-dom'

// I refactored this into a class comp thinking that issues with rerendering might be
// due to using a stateless comp, reality was I was asking localStorage.user?
// when I should have been asking localStorage.token?

class NavBar extends React.Component {

  logout = () => {
    localStorage.clear()
    this.props.clearAppState()
  }

  render() {
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