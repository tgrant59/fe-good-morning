import PropTypes from 'prop-types'
import React from 'react'

import LoadingSplash from 'components/LoadingSplash'

import AddOrderForm from './AddOrderForm'
import {
    AddOrderHeader,
    LatestOrderContainer,
    OrderCard,
    OrderCardHeader,
    OrderContent,
    OrderImg,
    OrderText,
    OrderItemActions,
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

const getOrderedItem = (
    orderedItem,
    index,
    isShowingOrders,
    hasOrderShipped,
    currentUserId,
    removeItem,
    orderId,
) => {
    let orderActions = null
    if (
        orderedItem.getIn(['owner', 'googleId']) === currentUserId &&
        !hasOrderShipped
    ) {
        orderActions = (
            <OrderItemActions
                title="Remove ordered item"
                onClick={() => {
                    removeItem({
                        orderId,
                        itemId: orderedItem.get('id'),
                    })
                }}
            >
                <i className="fas fa-trash" />
            </OrderItemActions>
        )
    }

    return (
        <OrderCard key={index} index={index} isShowingOrders={isShowingOrders}>
            <OrderContent isShowingOrders={isShowingOrders}>
                <OrderCardHeader>
                    <OrderImg src={orderedItem.getIn(['owner', 'picture'])} />
                    <OrderText>
                        {orderedItem.getIn(['owner', 'name'])}
                        {hasOrderShipped ? ` got` : ` is getting`}
                    </OrderText>
                    {orderActions}
                </OrderCardHeader>
                <OrderItemName>{orderedItem.get('name')}</OrderItemName>
                <OrderItemOptions>
                    {orderedItem
                        .get('options')
                        .map(getOrderedItemOptionSection)}
                </OrderItemOptions>
            </OrderContent>
        </OrderCard>
    )
}

class LatestOrder extends React.PureComponent {
    static propTypes = {
        acceptToBeHost: PropTypes.func.isRequired,
        acceptingTobeHost: PropTypes.bool,
        addOrder: PropTypes.func.isRequired,
        closeAndSettle: PropTypes.func.isRequired,
        closingAndSettling: PropTypes.bool,
        removeItem: PropTypes.func.isRequired,
        hasOrdered: PropTypes.bool,
        isOrdering: PropTypes.bool,
        items: PropTypes.object,
        order: PropTypes.object,
        currentUser: PropTypes.object,
    }

    static defaultProps = {
        acceptingTobeHost: false,
        closingAndSettling: false,
        hasOrdered: false,
        isOrdering: false,
    }

    state = {
        isShowingOrders: false,
    }

    toggleOrders = () => {
        this.setState({
            isShowingOrders: !this.state.isShowingOrders,
        })
    }

    render() {
        if (!this.props.order) return <LoadingSplash />
        const isCurrentUserHost =
            this.props.order.getIn(['host', 'googleId']) ===
            this.props.currentUser.get('googleId')
        const orderId = this.props.order.get('id')
        const currentUserId = this.props.currentUser.get('googleId')
        const hasOrderShipped =
            this.props.order.getIn(['details', 'orderedAt']) !== null
        let numOfMyOrders = 0
        if (this.props.order.get('orderedItems')) {
            numOfMyOrders = this.props.order
                .get('orderedItems')
                .reduce((myTotalOrders, orderedItem) => {
                    if (
                        orderedItem.getIn(['owner', 'googleId']) ===
                        currentUserId
                    ) {
                        return myTotalOrders + 1
                    }
                    return myTotalOrders
                }, 0)
        }

        let addToOrderForm
        if (hasOrderShipped) {
            addToOrderForm = (
                <OrderShippedSection>
                    Today&#8217;s order has finished, there&#8217;s always
                    tomorrow! 🍌
                </OrderShippedSection>
            )
        } else {
            addToOrderForm = (
                <div>
                    <AddOrderHeader>Add to Order</AddOrderHeader>
                    <AddOrderForm
                        hasOrdered={this.props.hasOrdered}
                        isOrdering={this.props.isOrdering}
                        addOrder={this.props.addOrder}
                        items={this.props.items}
                    />
                </div>
            )
        }

        return (
            <LatestOrderContainer>
                <OrderDetails
                    acceptToBeHost={this.props.acceptToBeHost}
                    acceptingTobeHost={this.props.acceptingTobeHost}
                    closeAndSettle={this.props.closeAndSettle}
                    closingAndSettling={this.props.closingAndSettling}
                    isCurrentUserHost={isCurrentUserHost}
                    isShowingOrders={this.state.isShowingOrders}
                    hasHostAccepted={this.props.order.getIn([
                        'details',
                        'accepted',
                    ])}
                    hasOrderShipped={hasOrderShipped}
                    hostName={this.props.order.getIn(['host', 'name'], '')}
                    hostPicture={this.props.order.getIn(
                        ['host', 'picture'],
                        '',
                    )}
                    numOrders={this.props.order.get('orderedItems').size}
                    numOfMyOrders={numOfMyOrders}
                    onShowOrders={this.toggleOrders}
                    orderId={this.props.order.get('id')}
                />
                {this.props.order
                    .get('orderedItems')
                    .map((orderedItem, index) =>
                        getOrderedItem(
                            orderedItem,
                            index,
                            this.state.isShowingOrders,
                            hasOrderShipped,
                            currentUserId,
                            this.props.removeItem,
                            orderId,
                        ),
                    )}
                {addToOrderForm}
            </LatestOrderContainer>
        )
    }
}

export default LatestOrder
