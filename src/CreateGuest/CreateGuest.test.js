import React from 'react' 
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import CreateGuest from './CreateGuest'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <CreateGuest/>
    </BrowserRouter>,
    div)
  ReactDOM.unmountComponentAtNode(div)  
})