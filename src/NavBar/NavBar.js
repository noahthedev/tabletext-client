import React from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom'

export default class NavBar extends React.Component {

  render() {
    return (
      <div className='navbar'>
        <h1>
          <Link to='/' className='nav-header'>TableText</Link>
        </h1>
        <ul className='nav-links'>
          <li>
            <Link to='/waitlist'>Waitlist</Link>
          </li>
          <li>
            <Link to='/addnew'>Add Guest</Link>
          </li>
        </ul>
      </div>
    )
  }
}