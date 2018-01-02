import { fromJS } from 'immutable'

import {
    LOAD_LATEST_ORDER_FAILURE,
    LOAD_LATEST_ORDER_SUCCESS,
    LOAD_LATEST_ORDER_REQUESTED,
} from './Orders.actions'

export const initialState = fromJS({
    latestOrder: null,
    loadingOrder: true,
    loadOrderError: false,
})

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_LATEST_ORDER_REQUESTED:
            return state.merge({
                latestOrder: null,
                loadingOrder: true,
                loadOrderError: false,
            })
        case LOAD_LATEST_ORDER_SUCCESS:
            return state.merge({
                latestOrder: fromJS(action.payload.orderData),
                loadingOrder: false,
                loadOrderError: false,
            })
        case LOAD_LATEST_ORDER_FAILURE:
            return state.merge({
                latestOrder: null,
                loadingOrder: false,
                loadOrderError: true,
            })
        default:
            return state
    }
}

export default loginReducer
