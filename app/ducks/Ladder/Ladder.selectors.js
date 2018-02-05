import { createSelector } from 'reselect'

import { selectUsersState } from 'ducks/Users/Users.selectors'

export const selectLadderState = state => state.get('ladder')

export const selectLadder = createSelector(
    selectLadderState,
    selectUsersState,
    (ladderState, usersState) => {
        if (!ladderState || !usersState) return null
        const ladder = ladderState.get('ladder')
        if (!ladder) return null
        return ladder.map(rank => {
            const ladderUser = usersState.getIn(['users', rank.get('userId')])
            return rank.set('user', ladderUser)
        })
    },
)
