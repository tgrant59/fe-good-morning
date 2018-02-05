import Immutable from 'immutable'

import {
    LOAD_LADDER_REQUESTED,
    LOAD_LADDER_SUCCESS,
    LOAD_LADDER_FAILURE,
} from './Ladder.actions'

export const initialState = Immutable.fromJS({
    ladder: null,
})

const ladderReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_LADDER_REQUESTED:
            return state
        case LOAD_LADDER_SUCCESS:
            return state.set('ladder', Immutable.fromJS(action.payload.ladder))
        case LOAD_LADDER_FAILURE:
            return state
        default:
            return state
    }
}

export default ladderReducer
