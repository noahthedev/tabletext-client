import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
//import { config } from '../config'
import GUESTS from '../guests'
import ApiContext from '../ApiContext'
import WaitList from '../WaitList/WaitList'
import LandingPage from '../LandingPage/LandingPage'
import NavBar from '../NavBar/NavBar'
import GuestCard from '../GuestCard/GuestCard'

export default class App extends React.Component {
  state = {
    guests: GUESTS
  }

  render() {
    const value = {
      guests: this.state.guests
    }
    return (
      <ApiContext.Provider value={value}>
        <div className='App'>
          <NavBar/>
          <Route exact path='/' component={LandingPage}/>
          <Route path='/waitlist' component={WaitList}/>
          <Route path = '/guest/:guestId' component={GuestCard}/>
          <footer>Copyright 2021 Noah Roberts</footer>
        </div>
      </ApiContext.Provider>
    )
  }
}


