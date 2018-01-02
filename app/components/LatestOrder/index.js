import PropTypes from 'prop-types'
import React from 'react'

import AddOrderForm from './AddOrderForm'
import {
    LatestOrderContainer,
    HostingCard,
    HostingCardHeader,
    HostImg,
    HostText,
    OrderCard,
    OrderCardHeader,
    OrderImg,
    OrderText,
    OrderItemName,
    OrderItemOptions,
    OrderItemOptionSection,
} from './LatestOrder.styles'

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

const getOrderedItem = orderedItem => (
    <OrderCard key={orderedItem.getIn(['details', 'ownerId'])}>
        <OrderCardHeader>
            <OrderImg src={orderedItem.getIn(['owner', 'picture'])} />
            <OrderText>
                {orderedItem.getIn(['owner', 'name'])} is getting
            </OrderText>
        </OrderCardHeader>
        <OrderItemName>{orderedItem.get('name')}</OrderItemName>
        <OrderItemOptions>
            {orderedItem.get('options').map(getOrderedItemOptionSection)}
        </OrderItemOptions>
    </OrderCard>
)

const LatestOrder = ({ addOrder, hasOrdered, isOrdering, items, order }) => {
    if (!order) return <div>Loading</div>
    return (
        <LatestOrderContainer>
            <HostingCard key="host">
                <HostingCardHeader>
                    <HostImg src={order.getIn(['host', 'picture'])} />
                    <HostText>
                        {order.getIn(['host', 'name'])} is hosting this order
                    </HostText>
                </HostingCardHeader>
            </HostingCard>
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
    addOrder: PropTypes.object,
    hasOrdered: PropTypes.bool,
    isOrdering: PropTypes.bool,
    items: PropTypes.object,
    order: PropTypes.object,
}

LatestOrder.defaultProps = {
    hasOrdered: false,
    isOrdering: false,
}

export default LatestOrder
