import PropTypes from 'prop-types'
import React from 'react'

import {
    HostingCard,
    HostingCardHeader,
    HostImg,
    HostText,
    OrderCard,
    OrderCardHeader,
    OrderImg,
    OrderText,
    OrderItemName,
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
    <OrderCard key={orderedItem.getIn(['owner', 'name'])}>
        <OrderCardHeader>
            <OrderImg src={orderedItem.getIn(['owner', 'picture'])} />
            <OrderText>
                {orderedItem.getIn(['owner', 'name'])} is getting
            </OrderText>
        </OrderCardHeader>
        <OrderItemName>{orderedItem.get('name')}</OrderItemName>
        {orderedItem.get('options').map(getOrderedItemOptionSection)}
    </OrderCard>
)

const LatestOrder = ({ order }) => {
    if (!order) return <div>Loading</div>
    return (
        <div>
            <HostingCard key="host">
                <HostingCardHeader>
                    <HostImg src={order.getIn(['host', 'picture'])} />
                    <HostText>
                        {order.getIn(['host', 'name'])} is hosting this order
                    </HostText>
                </HostingCardHeader>
            </HostingCard>
            {order.get('orderedItems').map(getOrderedItem)}
        </div>
    )
}

LatestOrder.propTypes = {
    order: PropTypes.object,
}

export default LatestOrder
