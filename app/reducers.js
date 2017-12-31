/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { fromJS } from 'immutable'
import { combineReducers } from 'redux-immutable'
import { LOCATION_CHANGE } from 'react-router-redux'

import globalReducer from 'containers/App/App.reducer'

const routeInitialState = fromJS({
    location: null,
})

function routeReducer(state = routeInitialState, action) {
    switch (action.type) {
        /* istanbul ignore next */
        case LOCATION_CHANGE:
            return state.merge({
                location: action.payload,
            })
        default:
            return state
    }
}

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(injectedReducers) {
    return combineReducers({
        route: routeReducer,
        global: globalReducer,
        ...injectedReducers,
    })
}
