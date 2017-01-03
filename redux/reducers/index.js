import weather from './examples01/weather'

import { combineReducers } from 'redux'
import {routerReducer } from 'react-router-redux'

export default combineReducers({
    examples: combineReducers({
        weather
    }),
    routing: routerReducer
})