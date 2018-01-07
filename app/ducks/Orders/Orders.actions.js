export const LOAD_LATEST_ORDER_REQUESTED =
    'fe-good-morning/Orders/LOAD_LATEST_ORDER_REQUESTED'
export const LOAD_LATEST_ORDER_SUCCESS =
    'fe-good-morning/Orders/LOAD_LATEST_ORDER_SUCCESS'
export const LOAD_LATEST_ORDER_FAILURE =
    'fe-good-morning/Orders/LOAD_LATEST_ORDER_FAILURE'
export const ADD_ORDER_REQUESTED = 'fe-good-morning/Orders/ADD_ORDER_REQUESTED'
export const ADD_ORDER_SUCCESS = 'fe-good-morning/Orders/ADD_ORDER_SUCCESS'
export const ADD_ORDER_FAILURE = 'fe-good-morning/Orders/ADD_ORDER_FAILURE'
export const ACCEPT_TO_BE_HOST_REQUESTED =
    'fe-good-morning/Orders/ACCEPT_TO_BE_HOST_REQUESTED'
export const ACCEPT_TO_BE_HOST_SUCCESS =
    'fe-good-morning/Orders/ACCEPT_TO_BE_HOST_SUCCESS'
export const ACCEPT_TO_BE_HOST_FAILURE =
    'fe-good-morning/Orders/ACCEPT_TO_BE_HOST_FAILURE'
export const CLOSE_AND_SETTLE_REQUESTED =
    'fe-good-morning/Orders/CLOSE_AND_SETTLE_REQUESTED'
export const CLOSE_AND_SETTLE_SUCCESS =
    'fe-good-morning/Orders/CLOSE_AND_SETTLE_SUCCESS'
export const CLOSE_AND_SETTLE_FAILURE =
    'fe-good-morning/Orders/CLOSE_AND_SETTLE_FAILURE'

export const loadLatestOrder = () => ({
    type: LOAD_LATEST_ORDER_REQUESTED,
})

export const loadLatestOrderSuccess = orderData => ({
    type: LOAD_LATEST_ORDER_SUCCESS,
    payload: { orderData },
})

export const loadLatestOrderFailure = error => ({
    type: LOAD_LATEST_ORDER_FAILURE,
    payload: { error },
})
export const addOrder = orderData => ({
    type: ADD_ORDER_REQUESTED,
    payload: { orderData },
})

export const addOrderSuccess = () => ({
    type: ADD_ORDER_SUCCESS,
})

export const addOrderFailure = error => ({
    type: ADD_ORDER_FAILURE,
    payload: { error },
})

export const acceptToBeHost = ({ orderId, isCurrentUserHost }) => ({
    type: ACCEPT_TO_BE_HOST_REQUESTED,
    payload: { orderId, isCurrentUserHost },
})

export const acceptToBeHostSuccess = () => ({
    type: ACCEPT_TO_BE_HOST_SUCCESS,
})

export const acceptToBeHostFailure = error => ({
    type: ACCEPT_TO_BE_HOST_FAILURE,
    payload: { error },
})

export const closeAndSettle = ({ orderId }) => ({
    type: CLOSE_AND_SETTLE_REQUESTED,
    payload: { orderId },
})

export const closeAndSettleSuccess = () => ({
    type: CLOSE_AND_SETTLE_SUCCESS,
})

export const closeAndSettleFailure = error => ({
    type: CLOSE_AND_SETTLE_FAILURE,
    payload: { error },
})
