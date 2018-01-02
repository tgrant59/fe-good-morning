import { call, put, select, takeLatest } from 'redux-saga/effects'

import { selectToken } from 'ducks/Login/Login.selectors'
import { loadUsers } from 'ducks/Users/Users.actions'
import backend from 'helpers/backend'

import { selectOrder } from './Orders.selectors'

import {
    LOAD_LATEST_ORDER_REQUESTED,
    ADD_ORDER_REQUESTED,
    DELETE_ORDER_REQUESTED,
    addOrderSuccess,
    addOrderFailure,
    deleteOrderSuccess,
    deleteOrderFailure,
    loadLatestOrder,
    loadLatestOrderSuccess,
    loadLatestOrderFailure,
} from './Orders.actions'

export function* getLatestOrder() {
    const token = yield select(selectToken)
    const requestURL = '/order'

    try {
        const response = yield call(backend.get, requestURL, token)
        if (response.status >= 400) {
            yield put(loadLatestOrderFailure(response.data))
        } else {
            const userIds = response.data.orderedItems.map(item => item.ownerId)
            userIds.push(response.data.details.ownerId)
            yield put(loadUsers(userIds))
            yield put(loadLatestOrderSuccess(response.data))
        }
    } catch (error) {
        yield put(loadLatestOrderFailure(error))
    }
}

export function* addOrder(action) {
    const token = yield select(selectToken)
    const order = yield select(selectOrder)
    const requestURL = `/orders/${order.get('id')}`

    const orderData = action.payload.orderData
    const options = Object.keys(orderData.selectedOptions).map(option => {
        let suboptions
        if (typeof orderData.selectedOptions[option] === 'string') {
            suboptions = [orderData.selectedOptions[option]]
        } else {
            suboptions = [...orderData.selectedOptions[option]]
        }
        return {
            name: option,
            options: suboptions,
        }
    })

    const body = JSON.stringify({
        item: {
            name: orderData.selectedItem.get('name'),
            options,
        },
    })

    try {
        const response = yield call(backend.post, requestURL, token, { body })
        if (response.status >= 400) {
            yield put(addOrderFailure(response.data))
        } else {
            yield put(addOrderSuccess(response.data))
            yield put(loadLatestOrder())
        }
    } catch (error) {
        yield put(addOrderFailure(error))
    }
}

export function* deleteOrder(action) {
    const token = yield select(selectToken)
    const order = yield select(selectOrder)
    const requestURL = `/orders/${order.get('id')}/${action.payload.orderId}`

    try {
        const response = yield call(backend.delete, requestURL, token)
        if (response.status >= 400) {
            yield put(deleteOrderFailure(response.data))
        } else {
            yield put(deleteOrderSuccess())
            yield put(loadLatestOrder())
        }
    } catch (error) {
        yield put(deleteOrderFailure(error))
    }
}

export default function* orderSagaWatcher() {
    yield takeLatest(LOAD_LATEST_ORDER_REQUESTED, getLatestOrder)
    yield takeLatest(ADD_ORDER_REQUESTED, addOrder)
    yield takeLatest(DELETE_ORDER_REQUESTED, deleteOrder)
}
