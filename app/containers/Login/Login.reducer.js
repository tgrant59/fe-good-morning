import { fromJS } from 'immutable'

import { LOGIN_SUCCESS, LOGIN_FAILED } from './Login.actions'

export const initialState = fromJS({
    credential: null,
    user: null,
    loginError: false,
})

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return state.merge({
                credential: action.payload.googleUser.tokenId,
                user: action.payload.googleUser.profileObj,
                loginError: false,
            })
        case LOGIN_FAILED:
            return state.merge({
                credential: null,
                user: null,
                loginError: true,
            })
        default:
            return state
    }
}

export default loginReducer
