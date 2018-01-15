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
        const user = usersState.getIn(['users', hostId])
        if (user) {
            latestOrder = latestOrder.set('host', user.set('googleId', hostId))
        }
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

export const selectIsOrdering = createSelector(selectOrderState, orderState => {
    if (!orderState) return null
    return orderState.get('isOrdering')
})

export const selectAcceptingTobeHost = createSelector(
    selectOrderState,
    orderState => {
        if (!orderState) return null
        return orderState.get('acceptingTobeHost')
    },
)

export const selectClosingAndSettling = createSelector(
    selectOrderState,
    orderState => {
        if (!orderState) return null
        return orderState.get('closingAndSettling')
    },
)

export const selectHasOrdered = createSelector(selectOrderState, orderState => {
    if (!orderState) return null
    return orderState.get('hasOrdered')
})
