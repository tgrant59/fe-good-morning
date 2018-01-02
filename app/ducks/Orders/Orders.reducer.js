import { fromJS } from 'immutable'

import {
    LOAD_LATEST_ORDER_FAILURE,
    LOAD_LATEST_ORDER_SUCCESS,
    LOAD_LATEST_ORDER_REQUESTED,
    ADD_ORDER_REQUESTED,
    ADD_ORDER_FAILURE,
    ADD_ORDER_SUCCESS,
} from './Orders.actions'

export const initialState = fromJS({
    latestOrder: null,
    loadingOrder: true,
    loadOrderError: false,
    submittingOrder: false,
    orderSubmitted: false,
    orderError: false,
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
        case ADD_ORDER_REQUESTED:
            return state.merge({
                submittingOrder: true,
            })
        case ADD_ORDER_SUCCESS:
            return state.merge({
                submittingOrder: false,
                orderSubmitted: true,
            })
        case ADD_ORDER_FAILURE:
            return state.merge({
                submittingOrder: false,
                orderError: true,
            })
        default:
            return state
    }
}

export default loginReducer
