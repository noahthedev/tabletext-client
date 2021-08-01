import React from 'react'
import './WaitList.css'
import { Link } from 'react-router-dom'
import ApiContext from '../ApiContext'


export default class WaitList extends React.Component {
  
  static contextType = ApiContext

  render() {
    const { guests=[] } = this.context
    const guestList = guests.map((guest) => {
      return (
        <div key={guest.id} className='guest'>
          <Link to={`/guests/${guest.id}`}>
          <h2>{guest.name}</h2>
          <p>guest count: {guest.count}</p>
          </Link>
        </div>
      )
    })

    return (
      
      <div className='guest-list'>
        {guestList}
      </div>
    )
  }
}