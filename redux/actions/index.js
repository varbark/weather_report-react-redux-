import $ from 'jquery'

export const getWeather = (dispatch, props) => {
  let city_code = props.city_code || "2306179"
  dispatch({ type: 'WEATHER_LOADING' });
  var imgurAPI = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20%3D%20"+ city_code +"&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
  $.getJSON(imgurAPI).done(data =>
    dispatch({ type: 'WEATHER', condition:data.query.results.channel.item.condition, location:data.query.results.channel.location}))
}
