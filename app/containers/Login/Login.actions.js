export const LOGIN_SUCCESS = 'fe-good-morning/Login/LOGIN_SUCCESS'
export const LOGIN_FAILED = 'fe-good-morning/Login/LOGIN_FAILED'

export const loginSuccess = googleUser => ({
    type: LOGIN_SUCCESS,
    payload: { googleUser },
})
export const loginFailure = () => ({
    type: LOGIN_FAILED,
})
