export const LOAD_USERS_REQUESTED = 'fe-good-morning/Users/LOAD_USER_REQUESTED'
export const LOAD_USERS_SUCCESS = 'fe-good-morning/Users/LOAD_USER_SUCCESS'
export const LOAD_USERS_FAILURE = 'fe-good-morning/Users/LOAD_USER_FAILURE'

export const loadUsers = userIds => ({
    type: LOAD_USERS_REQUESTED,
    payload: { userIds },
})

export const loadUsersSuccess = userData => ({
    type: LOAD_USERS_SUCCESS,
    payload: {
        users: userData.map(user => ({
            id: user.id,
            data: user.details,
        })),
    },
})

export const loadUsersFailure = error => ({
    type: LOAD_USERS_FAILURE,
    payload: { error },
})
