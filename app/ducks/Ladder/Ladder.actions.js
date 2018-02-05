export const LOAD_LADDER_REQUESTED =
    'fe-good-morning/Ladder/LOAD_LADDER_REQUESTED'
export const LOAD_LADDER_SUCCESS = 'fe-good-morning/Ladder/LOAD_LADDER_SUCCESS'
export const LOAD_LADDER_FAILURE = 'fe-good-morning/Ladder/LOAD_LADDER_FAILURE'

export const loadLadder = () => ({
    type: LOAD_LADDER_REQUESTED,
})

export const loadLadderSuccess = ladder => ({
    type: LOAD_LADDER_SUCCESS,
    payload: { ladder },
})

export const loadLadderFailure = error => ({
    type: LOAD_LADDER_FAILURE,
    payload: { error },
})
