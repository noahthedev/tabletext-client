import React from 'react'
import {Link} from 'react-router-dom'
import './LandingPage.css'

export default class LandingPage extends React.Component {

  render() {
    return (
      <div className='app-info'>
        <h1>TableText</h1>
        <p>TableText is a waiting list app that allows you to notify your guests via sms when their table is ready.</p>
        <Link to='/waitlist'>
        <button>Waitlist</button>
        </Link>
      </div>
    )
  }
}