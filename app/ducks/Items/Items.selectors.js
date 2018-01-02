import { createSelector } from 'reselect'

const selectItemsState = state => state.get('items')

export const selectItems = createSelector(selectItemsState, itemsState => {
    if (!itemsState) return null
    return itemsState.get('items')
})
