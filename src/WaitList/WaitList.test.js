import React from 'react' 
import ReactDOM from 'react-dom'
import WaitList from './WaitList'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(
      <WaitList/>,
    div)
  ReactDOM.unmountComponentAtNode(div)  
})