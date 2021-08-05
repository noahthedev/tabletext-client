import React from 'react'
import './CreateGuest.css'
import { config } from '../config'
import ApiContext from '../ApiContext'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/bootstrap.css'

export default class CreateGuest extends React.Component {
  state = {}

  static contextType = ApiContext

  handleSubmit = e => {
    e.preventDefault();
    const newGuest = {
      guestname: e.target['guest-name'].value,
      guestcount: e.target['guest-count'].value,
      phone: `+${this.state.phone}`
    }
    fetch(`${config.API_ENDPOINT}/waitlist`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body:JSON.stringify(newGuest) 
    })
    .then(response => {
      if (response.ok) {
        return response.json()
      }
      throw new Error(response.statusText)
    })
    .then(guest => {
      this.context.addGuest(guest)
      this.props.history.push(`/waitlist`)
    })
    .catch(error => console.error(error.message))
  }

  render() {
    return (
      <div className='form-div'>
        <h2>Add New Guest</h2>
        <form className='guest-form'
        onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor='name-input'>Name</label>
            <input type='text' id='name-input' name='guest-name' required autoFocus/>
          </div>
          <div>
            <label htmlFor='count-input'>Count</label>
            <input type='number' id='count-input' name='guest-count' min='0' required/>
          </div>
            <label htmlFor='PhoneInput'>Phone Number</label>
          <div className='phone-input'> 
          <PhoneInput
            country={'us'}
            value={this.state.phone}
            onChange={phone => this.setState({ phone })}
          />
          </div>
          <div className='button-container'>
            <button type='submit'>Add Guest</button>
          </div>
        </form>
      </div>
    )
  }
}

