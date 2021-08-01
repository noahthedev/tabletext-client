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
import Footer from '../Footer/Footer'
import CreateGuest from '../CreateGuest/CreateGuest'

export default class App extends React.Component {
  state = {
    guests: GUESTS
  }

  renderRoutes() {
    return (
      <>
        <Route 
          exact 
          path='/' 
          component={LandingPage}
        />
        <Route 
          path='/waitlist' 
          component={WaitList}
        />
        <Route 
          path = '/guests/:guestId' component={GuestCard}
        />
        <Route  
          path='/addnew'
          component={CreateGuest}
        />
      </>
    )      
  }

  render() {
    const value = {
      guests: this.state.guests
    }
    return (
      <ApiContext.Provider value={value}>
        <div className='App'>
          <nav>
            <NavBar/>
          </nav>
          <main>
            {this.renderRoutes()}
          </main>
          <footer>
            <Footer/>
          </footer>
        </div>
      </ApiContext.Provider>
    )
  }
}


