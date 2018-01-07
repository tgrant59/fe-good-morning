import { fromJS } from 'immutable'

import {
    LOAD_LATEST_ORDER_FAILURE,
    LOAD_LATEST_ORDER_SUCCESS,
    LOAD_LATEST_ORDER_REQUESTED,
    ADD_ORDER_REQUESTED,
    ADD_ORDER_FAILURE,
    ADD_ORDER_SUCCESS,
    ACCEPT_TO_BE_HOST_REQUESTED,
    ACCEPT_TO_BE_HOST_SUCCESS,
    ACCEPT_TO_BE_HOST_FAILURE,
    CLOSE_AND_SETTLE_REQUESTED,
    CLOSE_AND_SETTLE_SUCCESS,
    CLOSE_AND_SETTLE_FAILURE,
} from './Orders.actions'

export const initialState = fromJS({
    latestOrder: null,
    loadingOrder: true,
    loadOrderError: false,
    submittingOrder: false,
    orderSubmitted: false,
    orderError: false,
    acceptingTobeHost: false,
    acceptedTobeHost: false,
    acceptTobeHostError: false,
    closingAndSettling: false,
    closedAndSettled: false,
    closeAndSettleError: false,
})

const orderReducer = (state = initialState, action) => {
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
        case ACCEPT_TO_BE_HOST_REQUESTED:
            return state.merge({
                acceptingTobeHost: true,
            })
        case ACCEPT_TO_BE_HOST_SUCCESS:
            return state.merge({
                acceptingTobeHost: false,
                acceptedTobeHost: true,
            })
        case ACCEPT_TO_BE_HOST_FAILURE:
            return state.merge({
                acceptingTobeHost: false,
                acceptTobeHostError: true,
            })
        case CLOSE_AND_SETTLE_REQUESTED:
            return state.merge({
                closingAndSettling: true,
            })
        case CLOSE_AND_SETTLE_SUCCESS:
            return state.merge({
                closingAndSettling: false,
                closedAndSettled: true,
            })
        case CLOSE_AND_SETTLE_FAILURE:
            return state.merge({
                closingAndSettling: false,
                closeAndSettleError: true,
            })
        default:
            return state
    }
}

export default orderReducer
