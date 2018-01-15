export const LOAD_LEDGERS_REQUESTED =
    'fe-good-morning/Ledgers/LOAD_LEDGERS_REQUESTED'
export const LOAD_LEDGERS_SUCCESS =
    'fe-good-morning/Ledgers/LOAD_LEDGERS_SUCCESS'
export const LOAD_LEDGERS_FAILURE =
    'fe-good-morning/Ledgers/LOAD_LEDGERS_FAILURE'

export const loadLedgers = () => ({
    type: LOAD_LEDGERS_REQUESTED,
})

export const loadLedgersSuccess = ledgers => ({
    type: LOAD_LEDGERS_SUCCESS,
    payload: { ledgers },
})

export const loadLedgersFailure = error => ({
    type: LOAD_LEDGERS_FAILURE,
    payload: { error },
})
