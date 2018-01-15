import { call, put, select, takeEvery } from 'redux-saga/effects'

import { selectToken } from 'ducks/Login/Login.selectors'
import backend from 'helpers/backend'

import {
    LOAD_USERS_REQUESTED,
    loadUsersSuccess,
    loadUsersFailure,
} from './Users.actions'

export function* getUsers(action) {
    const token = yield select(selectToken)
    const requestURL = '/users'

    try {
        const response = yield call(backend.post, requestURL, token, {
            body: JSON.stringify({
                ids: action.payload.userIds,
            }),
        })
        if (response.status >= 400) {
            yield put(loadUsersFailure(response.data))
        } else {
            yield put(loadUsersSuccess(response.data))
        }
    } catch (error) {
        yield put(loadUsersFailure(error))
    }
}

export default function* contentItemPackPreviewSagaWatcher() {
    yield takeEvery(LOAD_USERS_REQUESTED, getUsers)
}
