import { fromJS } from 'immutable'

import {
    LOAD_LATEST_ORDER_REQUESTED,
    LOAD_LATEST_ORDER_SUCCESS,
    LOAD_LATEST_ORDER_FAILURE,
    ADD_ORDER_REQUESTED,
    ADD_ORDER_SUCCESS,
    ADD_ORDER_FAILURE,
    DELETE_ORDER_REQUESTED,
    DELETE_ORDER_SUCCESS,
    DELETE_ORDER_FAILURE,
} from './Orders.actions'

export const initialState = fromJS({
    latestOrder: null,
    loadingOrder: true,
    loadOrderError: false,
    orderError: false,
    orderSubmitted: false,
    submittingOrder: false,
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
        case DELETE_ORDER_REQUESTED:
            return state
        case DELETE_ORDER_SUCCESS:
            return state
        case DELETE_ORDER_FAILURE:
            return state
        default:
            return state
    }
}

export default loginReducer
