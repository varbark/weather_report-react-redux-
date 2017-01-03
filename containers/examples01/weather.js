import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getWeather } from '../../redux/actions/index'
import { withRouter } from 'react-router'

class Weather extends Component{
  constructor(props) {
    super(props)
  }
  componentDidMount() {
    this.props.onGetWeather()
  }

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps')
  }

  componentDidUpdate() {
    console.log('componentDidUpdate')
  }
         
            
  render() {
    const {city_code, info:{loading, condition, location}, onGetWeather} = this.props;
    return(
      <div>
        <button onClick={onGetWeather}>台北市</button>
        <br/>CountStatus: 
        <span style={{color:"blue"}}>
            {loading}</span>
        <p/>
        <WeatherInfo condition={condition} location={location}/>
      </div>
    )
  }
}

function WeatherInfo(props) {
    if(props.location.city){
      return (
          <div>
            <h4>地點：{props.location.city}</h4>
            <p>氣溫：{props.condition.temp}</p>
            <p>天氣：{props.condition.text}</p>
          </div>
      )
    }else{
      return(
        <div></div>
        )
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
onGetWeather: () => getWeather(dispatch, ownProps)
});

export default connect(
  (state, ownProps) =>( {
    info: state.examples.weather
  }),
  mapDispatchToProps
)(Weather)