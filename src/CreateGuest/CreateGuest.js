import React from 'react'
import './CreateGuest.css'

export default class CreateGuest extends React.Component {

  render() {
    return (
      <div>
        <h2>Add New Guest</h2>
        <form className='guest-form'>
        <div>
            <label htmlFor='name-input'>Name</label>
            <input type='text' id='name-input' name='guest-name' required/>
          </div>
          <div>
            <label htmlFor='count-input'>Count</label>
            <input type='number' id='count-input' name='guest-count' required/>
          </div>
          <div>
            <label htmlFor='number-input'>Phone Number</label>
            <input type='text' id='number-input' name='guest-number' required/>
          </div>
          <div className='button-container'>
          <button type='submit'>Add Guest</button>
          </div>
        </form>
      </div>
    )
  }
}