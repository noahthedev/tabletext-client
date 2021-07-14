import React from 'react' 
import ReactDOM from 'react-dom'
import GuestCard from './GuestCard'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
      <GuestCard/>,
    div)
  ReactDOM.unmountComponentAtNode(div)  
})