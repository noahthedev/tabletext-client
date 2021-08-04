import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import { config } from '../config'
//import GUESTS from '../guests'
import ApiContext from '../ApiContext'
import WaitList from '../WaitList/WaitList'
import LandingPage from '../LandingPage/LandingPage'
import NavBar from '../NavBar/NavBar'
import GuestCard from '../GuestCard/GuestCard'
import Footer from '../Footer/Footer'
import CreateGuest from '../CreateGuest/CreateGuest'

export default class App extends React.Component {
  state = {
    guests: []
  }

  componentDidMount() {
    fetch(`${config.API_ENDPOINT}/waitlist`)
      .then(response => {
        if (response.ok) {
          return response.json()
        }
        throw new Error(response.statusText)
      })
      .then(guests => this.setState({guests}))
      .catch(error => console.error(error.message))
  }

  handleAddGuest = guest => {
    this.setState({
      guests: [
        ...this.state.guests, guest
      ]
    })
  }

  handleDeleteGuest = guestId => {
    this.setState({
      guests: this.state.guests.filter(guest => guest.id !== parseInt(guestId))
    })
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
      guests: this.state.guests,
      addGuest: this.handleAddGuest,
      deleteGuest: this.handleDeleteGuest
    }
    return (
      <ApiContext.Provider value={value}>
        <div className='App'>
          <div className='content-wrap'>
            <NavBar/>
            <div className='main'>
            {this.renderRoutes()}
            </div>
            </div>
            <footer>
              <Footer/>
            </footer>
        </div>
      </ApiContext.Provider>
    )
  }
}


