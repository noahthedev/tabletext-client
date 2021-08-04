import React from 'react'
import './GuestCard.css'
import ApiContext from '../ApiContext'
import { config } from '../config'

export default class GuestCard extends React.Component {
  state = {
    message: ''
  }
  static defaultProps = {
    match: {
      params: {}
    },
  }

  static contextType = ApiContext

  handleClickDelete = e => {
    e.preventDefault()
    const { guestId } = this.props.match.params

    fetch(`${config.API_ENDPOINT}/waitlist/${guestId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json'
      },
    })
      .then(() => {
        this.context.deleteGuest(guestId)
        this.props.history.push(`/waitlist`)
      })
      .catch(error => {
        console.error({ error })
      })
  }

  handleClickSms = (phoneNumber, e) => {
    e.preventDefault();
    const guestPhone = {
      phone: phoneNumber
    }
    fetch(`${config.API_ENDPOINT}/sms`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(guestPhone)  
    })
      .then(response => response.json())
      .then(res => this.setState({ 
        message: res.message
      }))
      .catch(error => console.log(error))
  } 
    
      

  findGuest = (guests=[], guestId) => guests.find(guest => guest.id === parseInt(guestId))

  render() {
    const { guests=[] } = this.context
    const { guestId } = this.props.match.params
    const guest = this.findGuest(guests, guestId) || {}
    return (
      <div className='guest-card'>
        <h1>{guest.guestname}</h1>
        <p>guest count: {guest.guestcount}</p>
        <p>phone: {guest.phone}</p>
        <button onClick={e => {this.handleClickSms(guest.phone, e)}}>Text Guest</button>
        <button onClick={this.handleClickDelete}>Delete Guest</button>
        <h3>{this.state.message}</h3>
      </div>
    )
  }
}