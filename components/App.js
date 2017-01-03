import React from 'react'
import { Link, browserHistory } from 'react-router'

export default function App({ children }) {
  return (
    <div>
      <header>
        Links:
        {' '}
        <Link to="/" >台北市</Link>
        {' '}
        <Link to="/2306181" >台中市</Link>
      </header>
      <hr/>
      <div style={{ marginTop: '1.5em' }}>{children}</div>
    </div>
  )
}