
import React from 'react'
import ReactDOM from 'react-dom'

import Counter from '../components/Counter';
import './application.css'
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Counter/>,
    document.body.appendChild(document.createElement('div')),
  )
})