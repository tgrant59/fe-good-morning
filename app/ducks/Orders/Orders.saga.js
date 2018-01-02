import { call, put, select, takeLatest } from 'redux-saga/effects'

import { selectToken } from 'ducks/Login/Login.selectors'
import { loadUsers } from 'ducks/Users/Users.actions'
import backend from 'helpers/backend'

import {
    LOAD_LATEST_ORDER_REQUESTED,
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

export default function* contentItemPackPreviewSagaWatcher() {
    yield takeLatest(LOAD_LATEST_ORDER_REQUESTED, getLatestOrder)
}
