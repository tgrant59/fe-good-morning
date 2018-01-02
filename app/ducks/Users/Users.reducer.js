import Immutable from 'immutable'

import {
    LOAD_USERS_FAILURE,
    LOAD_USERS_REQUESTED,
    LOAD_USERS_SUCCESS,
} from './Users.actions'

export const initialState = Immutable.fromJS({
    users: new Immutable.Map(),
})

const setNewUserMap = (userMap, newUsers) => {
    let users = userMap
    newUsers.forEach(user => {
        users = users.set(user.id, Immutable.fromJS(user.data))
    })
    return users
}

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_USERS_REQUESTED:
            return state
        case LOAD_USERS_SUCCESS:
            return state.merge({
                users: setNewUserMap(state.get('users'), action.payload.users),
            })
        case LOAD_USERS_FAILURE:
            return state
        default:
            return state
    }
}

export default loginReducer
