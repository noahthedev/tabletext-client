import React from 'react' 
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import WaitList from './WaitList'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
    <BrowserRouter>
      <WaitList/>
    </BrowserRouter>,
    div)
  ReactDOM.unmountComponentAtNode(div)  
})