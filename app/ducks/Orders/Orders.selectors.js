import { createSelector } from 'reselect'

import { selectUsersState } from 'ducks/Users/Users.selectors'

export const selectOrderState = state => state.get('orders')

export const selectOrder = createSelector(
    selectOrderState,
    selectUsersState,
    (orderState, usersState) => {
        if (!orderState || !usersState) return null
        let latestOrder = orderState.get('latestOrder')
        if (!latestOrder) return null
        const hostId = latestOrder.getIn(['details', 'ownerId'])
        latestOrder = latestOrder.set(
            'host',
            usersState.getIn(['users', hostId]),
        )
        const orderedItems = latestOrder
            .get('orderedItems')
            .map(orderedItem =>
                orderedItem.set(
                    'owner',
                    usersState.getIn(['users', orderedItem.get('ownerId')]),
                ),
            )
        latestOrder = latestOrder.set('orderedItems', orderedItems)
        return latestOrder
    },
)
