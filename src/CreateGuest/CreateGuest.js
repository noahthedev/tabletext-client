import React from 'react'
import './CreateGuest.css'
import { config } from '../config'
import ApiContext from '../ApiContext'
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'

export default class CreateGuest extends React.Component {
  state = {
    phoneNumber: ''
  }

  updateNumber = (num) => {
    this.setState({
      phoneNumber: num
    })
  }

  static contextType = ApiContext

  handleSubmit = e => {
    e.preventDefault();
    const newGuest = {
      guestname: e.target['guest-name'].value,
      guestcount: e.target['guest-count'].value,
      phone: this.state.phoneNumber
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
            <input type='number' id='count-input' name='guest-count' required/>
          </div>
          <div className='phone-input'>
            <label htmlFor='PhoneInput'>Phone Number</label>
          <PhoneInput
            defaultCountry="US" 
            value={undefined}
            onChange={this.updateNumber}
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