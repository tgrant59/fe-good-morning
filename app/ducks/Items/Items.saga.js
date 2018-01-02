import { call, put, select, takeLatest } from 'redux-saga/effects'

import { selectToken } from 'ducks/Login/Login.selectors'
import backend from 'helpers/backend'

import {
    LOAD_ITEMS_REQUESTED,
    loadItemsSuccess,
    loadItemsFailure,
} from './Items.actions'

export function* getItems() {
    const token = yield select(selectToken)
    const requestURL = '/items'

    try {
        const response = yield call(backend.get, requestURL, token)
        if (response.status >= 400) {
            yield put(loadItemsFailure(response.data))
        } else {
            yield put(loadItemsSuccess(response.data))
        }
    } catch (error) {
        yield put(loadItemsFailure(error))
    }
}

export default function* contentItemPackPreviewSagaWatcher() {
    yield takeLatest(LOAD_ITEMS_REQUESTED, getItems)
}
