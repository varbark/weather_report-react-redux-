import React, { Component } from 'react'
import Weather from '../containers/examples01/weather'

export default class Examples extends Component {
  constructor(props) {
    super(props) 
  }
  render() {
    return (
      <div>
        <h1>React</h1>
        <Weather city_code={this.props.params.city_code}/>
      </div>
    )
  }
}