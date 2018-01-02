import PropTypes from 'prop-types'
import React from 'react'

import AddOrderForm from './AddOrderForm'
import {
    LatestOrderContainer,
    HostingCard,
    HostingCardHeader,
    HostImg,
    HostTextContainer,
    HostText,
    HostSubText,
    HostButton,
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

const getHostButton = order => {
    // TODO determine whether current user is hot
    const isCurrentUserHost = false
    const hasHostAccepted = order.getIn(['details', 'accepted'])
    const hasOrderShipped = order.getIn(['details', 'orderedAt']) !== null

    if (!hasHostAccepted) {
        const message = isCurrentUserHost
            ? `Accept to be host`
            : `Host this order`
        return (
            <HostButton>
                <i className="fas fa-user" />&nbsp;{message}
            </HostButton>
        )
    }

    if (hasOrderShipped) {
        return (
            <span>
                <i className="fas fa-ship fa-lg" />&nbsp;
            </span>
        )
    }

    return null
}

const getHostText = order => {
    const hasHostAccepted = order.getIn(['details', 'accepted'])
    const hasOrderShipped = order.getIn(['details', 'orderedAt']) !== null

    if (!hasHostAccepted) {
        return (
            <span>
                <i className="fas fa-user" />&nbsp; This order needs a host!
            </span>
        )
    }

    if (hasOrderShipped) {
        return (
            <span>
                <i className="fas fa-ship" />&nbsp; This order has already
                shipped!
            </span>
        )
    }

    return (
        <span>
            <i className="fas fa-cart-arrow-down" />&nbsp; Place your order,
            now!
        </span>
    )
}

const LatestOrder = ({ addOrder, hasOrdered, isOrdering, items, order }) => {
    if (!order) return <div>Loading</div>
    return (
        <LatestOrderContainer>
            <HostingCard key="host">
                <HostingCardHeader>
                    <HostImg src={order.getIn(['host', 'picture'])} />
                    <HostTextContainer>
                        <HostText>{getHostText(order)}</HostText>
                        <HostSubText>
                            {order.getIn(['host', 'name'])} is hosting this
                            order
                        </HostSubText>
                    </HostTextContainer>
                    {getHostButton(order)}
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
    addOrder: PropTypes.func.isRequired,
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
