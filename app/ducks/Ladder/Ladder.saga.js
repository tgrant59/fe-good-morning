import { call, put, select, takeLatest } from 'redux-saga/effects'

import { selectToken } from 'ducks/Login/Login.selectors'
import { loadUsers } from 'ducks/Users/Users.actions'
import backend from 'helpers/backend'

import {
    LOAD_LADDER_REQUESTED,
    loadLadderSuccess,
    loadLadderFailure,
} from './Ladder.actions'

export function* getLadderSaga() {
    const token = yield select(selectToken)
    const requestURL = '/ladder'

    try {
        const response = yield call(backend.get, requestURL, token)
        if (response.status >= 400) {
            yield put(loadLadderFailure(response.data))
        } else {
            const userIds = response.data.map(ladder => ladder.userId)
            yield put(loadUsers(userIds))
            yield put(loadLadderSuccess(response.data))
        }
    } catch (error) {
        yield put(loadLadderFailure(error))
    }
}

export default function* ladderSagaWatcher() {
    yield takeLatest(LOAD_LADDER_REQUESTED, getLadderSaga)
}
