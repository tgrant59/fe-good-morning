export const LOAD_ITEMS_REQUESTED = 'fe-good-morning/Items/LOAD_ITEMS_REQUESTED'
export const LOAD_ITEMS_SUCCESS = 'fe-good-morning/Items/LOAD_ITEMS_SUCCESS'
export const LOAD_ITEMS_FAILED = 'fe-good-morning/Items/LOAD_ITEMS_FAILED'

export const loadItems = () => ({
    type: LOAD_ITEMS_REQUESTED,
})
export const loadItemsSuccess = items => ({
    type: LOAD_ITEMS_SUCCESS,
    payload: { items },
})
export const loadItemsFailure = error => ({
    type: LOAD_ITEMS_FAILED,
    payload: { error },
})
