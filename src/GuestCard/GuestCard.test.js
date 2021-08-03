import React from 'react' 
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import GuestCard from './GuestCard'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <GuestCard/>
    </BrowserRouter>,
    div)
  ReactDOM.unmountComponentAtNode(div)  
})
