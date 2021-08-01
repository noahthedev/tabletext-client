import React from 'react'
import './GuestCard.css'
import ApiContext from '../ApiContext'

export default class GuestCard extends React.Component {
  static defaultProps = {
    match: {
      params: {}
    }
  }

  static contextType = ApiContext

  findGuest = (guests=[], guestId) => guests.find(guest => guest.id === parseInt(guestId))

  render() {
    const { guests=[] } = this.context
    const { guestId } = this.props.match.params
    const guest = this.findGuest(guests, guestId) || {}
    return (
      <div className='guest-card'>
        <h1>{guest.name}</h1>
        <p>guest count: {guest.count}</p>
        <p>phone: {guest.phone}</p>
        <button>Text Guest</button>
        <button>Delete Guest</button>
      </div>
    )
  }
}