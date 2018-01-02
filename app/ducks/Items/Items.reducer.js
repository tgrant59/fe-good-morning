import Immutable from 'immutable'

import {
    LOAD_ITEMS_REQUESTED,
    LOAD_ITEMS_FAILED,
    LOAD_ITEMS_SUCCESS,
} from './Items.actions'

export const initialState = Immutable.fromJS({
    items: new Immutable.List(),
})

const itemsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_ITEMS_REQUESTED:
            return state
        case LOAD_ITEMS_SUCCESS:
            return state.merge({
                items: Immutable.fromJS(action.payload.items),
            })
        case LOAD_ITEMS_FAILED:
            return state
        default:
            return state
    }
}

export default itemsReducer
