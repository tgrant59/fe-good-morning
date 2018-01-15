import Immutable from 'immutable'

import {
    LOAD_LEDGERS_REQUESTED,
    LOAD_LEDGERS_SUCCESS,
    LOAD_LEDGERS_FAILURE,
} from './Ledgers.actions'

export const initialState = Immutable.fromJS({
    ledgers: null,
})

const ledgersReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_LEDGERS_REQUESTED:
            return state
        case LOAD_LEDGERS_SUCCESS:
            return state.set(
                'ledgers',
                Immutable.fromJS(action.payload.ledgers),
            )
        case LOAD_LEDGERS_FAILURE:
            return state
        default:
            return state
    }
}

export default ledgersReducer
