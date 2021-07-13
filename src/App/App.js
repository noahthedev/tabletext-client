import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import { config } from '../config'



export default class App extends React.Component {
  state = {
    guests: []
  }

  render() {
    return (
      <div className="App">
        <p>Hello</p>
      </div>
    )
  }
}


