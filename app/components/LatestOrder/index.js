import PropTypes from 'prop-types'
import React from 'react'

import australianize from 'helpers/australianize'

import AddOrderForm from './AddOrderForm'
import {
    LatestOrderContainer,
    OrderCard,
    OrderCardHeader,
    OrderImg,
    OrderText,
    OrderItemName,
    OrderItemOptions,
    OrderItemOptionSection,
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

const getOrderedItem = (orderedItem, index) => (
    <OrderCard key={index}>
        <OrderCardHeader>
            <OrderImg src={orderedItem.getIn(['owner', 'picture'])} />
            <OrderText>
                {australianize(orderedItem.getIn(['owner', 'name']))} is getting
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
    hasOrdered,
    isOrdering,
    items,
    order,
    currentUser,
}) => {
    if (!order) return <div>Loading</div>
    const isCurrentUserHost =
        order.getIn(['host', 'id']) === currentUser.get('id')
    return (
        <LatestOrderContainer>
            <OrderDetails
                acceptToBeHost={acceptToBeHost}
                acceptingTobeHost={acceptingTobeHost}
                isCurrentUserHost={isCurrentUserHost}
                hasHostAccepted={order.getIn(['details', 'accepted'])}
                hasOrderShipped={order.getIn(['details', 'orderedAt']) !== null}
                hostName={order.getIn(['host', 'name'])}
                hostPicture={order.getIn(['host', 'picture'])}
                orderId={order.get('id')}
            />
            {order.get('orderedItems').map(getOrderedItem)}
            <h1>Add to Order</h1>
            <AddOrderForm
                hasOrdered={hasOrdered}
                isOrdering={isOrdering}
                addOrder={addOrder}
                items={items}
            />
        </LatestOrderContainer>
    )
}

LatestOrder.propTypes = {
    acceptToBeHost: PropTypes.func.isRequired,
    acceptingTobeHost: PropTypes.bool,
    addOrder: PropTypes.func.isRequired,
    hasOrdered: PropTypes.bool,
    isOrdering: PropTypes.bool,
    items: PropTypes.object,
    order: PropTypes.object,
    currentUser: PropTypes.object,
}

LatestOrder.defaultProps = {
    acceptingTobeHost: false,
    hasOrdered: false,
    isOrdering: false,
}

export default LatestOrder
