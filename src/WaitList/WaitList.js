import React from 'react'
import './WaitList.css'
import ApiContext from '../ApiContext'


export default class WaitList extends React.Component {
  static contextType = ApiContext

  render() {
    const { guests=[] } = this.context
    const guestList = guests.map((guest) => {
      return (
        <div key={guest.id}>
          <h2>{guest.name}</h2>
          <p>{guest.count}</p>
          <p>{guest.phone}</p>
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