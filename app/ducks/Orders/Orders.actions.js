export const LOAD_LATEST_ORDER_REQUESTED =
    'fe-good-morning/Orders/LOAD_LATEST_ORDER_REQUESTED'
export const LOAD_LATEST_ORDER_SUCCESS =
    'fe-good-morning/Orders/LOAD_LATEST_ORDER_SUCCESS'
export const LOAD_LATEST_ORDER_FAILURE =
    'fe-good-morning/Orders/LOAD_LATEST_ORDER_FAILURE'

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
