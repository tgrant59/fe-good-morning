import { createSelector } from 'reselect'

const selectLoginState = state => state.get('login')

export const selectToken = createSelector(selectLoginState, loginState =>
    loginState.get('credential'),
)
