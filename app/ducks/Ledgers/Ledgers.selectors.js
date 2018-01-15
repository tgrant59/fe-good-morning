import { createSelector } from 'reselect'

import { selectUsersState } from 'ducks/Users/Users.selectors'

export const selectLedgersState = state => state.get('ledgers')

export const selectLedgers = createSelector(
    selectLedgersState,
    selectUsersState,
    (ledgerState, usersState) => {
        if (!ledgerState || !usersState) return null
        const ledgers = ledgerState.get('ledgers')
        if (!ledgers) return null
        const ledgersWithUsers = ledgers.map(ledger => {
            const ledgerUser = usersState.getIn(['users', ledger.get('userId')])
            return ledger.set('user', ledgerUser)
        })
        return ledgersWithUsers
    },
)
