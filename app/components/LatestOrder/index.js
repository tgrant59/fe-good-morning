import PropTypes from 'prop-types'
import React from 'react'

import LoadingSplash from 'components/LoadingSplash'

import AddOrderForm from './AddOrderForm'
import {
    AddOrderHeader,
    LatestOrderContainer,
    OrderCard,
    OrderCardHeader,
    OrderImg,
    OrderText,
    OrderItemName,
    OrderItemOptions,
    OrderItemOptionSection,
    OrderShippedSection,
} from './LatestOrder.styles'
import OrderDetails from './OrderDetails'

const getOrderedItemOptionSection = optionSection => (
    <OrderItemOptionSection key={optionSection.get('name')}>
        <p>{optionSection.get('name')}</p>
        <ul>
            {optionSection
                .get('options')
                .map(option => <li key={option}>{option}</li>)}
        </ul>
    </OrderItemOptionSection>
)

const getOrderedItem = (orderedItem, index, hasOrderShipped) => (
    <OrderCard key={index}>
        <OrderCardHeader>
            <OrderImg src={orderedItem.getIn(['owner', 'picture'])} />
            <OrderText>
                {orderedItem.getIn(['owner', 'name'])}
                {hasOrderShipped ? ` got` : ` is getting`}
            </OrderText>
        </OrderCardHeader>
        <OrderItemName>{orderedItem.get('name')}</OrderItemName>
        <OrderItemOptions>
            {orderedItem.get('options').map(getOrderedItemOptionSection)}
        </OrderItemOptions>
    </OrderCard>
)

const LatestOrder = ({
    acceptToBeHost,
    acceptingTobeHost,
    addOrder,
    closeAndSettle,
    closingAndSettling,
    hasOrdered,
    isOrdering,
    items,
    order,
    currentUser,
}) => {
    if (!order) return <LoadingSplash />
    const isCurrentUserHost =
        order.getIn(['host', 'googleId']) === currentUser.get('googleId')
    const hasOrderShipped = order.getIn(['details', 'orderedAt']) !== null
    let addToOrderForm
    if (hasOrderShipped) {
        addToOrderForm = (
            <OrderShippedSection>
                Today&#8217;s order has finished, there&#8217;s always tomorrow!
                🍌
            </OrderShippedSection>
        )
    } else {
        addToOrderForm = (
            <div>
                <AddOrderHeader>Add to Order</AddOrderHeader>
                <AddOrderForm
                    hasOrdered={hasOrdered}
                    isOrdering={isOrdering}
                    addOrder={addOrder}
                    items={items}
                />
            </div>
        )
    }

    return (
        <LatestOrderContainer>
            <OrderDetails
                acceptToBeHost={acceptToBeHost}
                acceptingTobeHost={acceptingTobeHost}
                closeAndSettle={closeAndSettle}
                closingAndSettling={closingAndSettling}
                isCurrentUserHost={isCurrentUserHost}
                hasHostAccepted={order.getIn(['details', 'accepted'])}
                hasOrderShipped={hasOrderShipped}
                hostName={order.getIn(['host', 'name'], '')}
                hostPicture={order.getIn(['host', 'picture'], '')}
                orderId={order.get('id')}
            />
            {order
                .get('orderedItems')
                .map((orderedItem, index) =>
                    getOrderedItem(orderedItem, index, hasOrderShipped),
                )}
            {addToOrderForm}
        </LatestOrderContainer>
    )
}

LatestOrder.propTypes = {
    acceptToBeHost: PropTypes.func.isRequired,
    acceptingTobeHost: PropTypes.bool,
    addOrder: PropTypes.func.isRequired,
    closeAndSettle: PropTypes.func.isRequired,
    closingAndSettling: PropTypes.bool,
    hasOrdered: PropTypes.bool,
    isOrdering: PropTypes.bool,
    items: PropTypes.object,
    order: PropTypes.object,
    currentUser: PropTypes.object,
}

LatestOrder.defaultProps = {
    acceptingTobeHost: false,
    closingAndSettling: false,
    hasOrdered: false,
    isOrdering: false,
}

export default LatestOrder
