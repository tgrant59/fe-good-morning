import { call, put, select, takeLatest } from 'redux-saga/effects'

import { selectToken } from 'ducks/Login/Login.selectors'
import backend from 'helpers/backend'

import {
    LOAD_LEDGERS_REQUESTED,
    loadLedgersSuccess,
    loadLedgersFailure,
} from './Ledgers.actions'

export function* getLedgers() {
    const token = yield select(selectToken)
    const requestURL = '/ledgers'

    try {
        const response = yield call(backend.get, requestURL, token)
        if (response.status >= 400) {
            yield put(loadLedgersFailure(response.data))
        } else {
            yield put(loadLedgersSuccess(response.data))
        }
    } catch (error) {
        yield put(loadLedgersFailure(error))
    }
}

export default function* ledgersSagaWatcher() {
    yield takeLatest(LOAD_LEDGERS_REQUESTED, getLedgers)
}
