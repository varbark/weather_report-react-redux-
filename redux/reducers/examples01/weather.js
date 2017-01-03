export default function weather(state = {location: {}, condition: {},
  loading:"Please click the 'GET WEATHER' button"}, action){
    switch (action.type) {
      case 'WEATHER':
        return {...state,
          location: action.location,
          condition: action.condition,
          loading: "loaded"
        };
      case 'WEATHER_LOADING':
        return {...state,
          loading: "loading..."
        };
      default:
        return state;
    }
}

