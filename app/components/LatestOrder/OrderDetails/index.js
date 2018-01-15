import PropTypes from 'prop-types'
import React from 'react'

import {
    HostingCard,
    HostingCardHeader,
    HostButtonContainer,
    HostImg,
    HostTextContainer,
    HostText,
    HostSubText,
    HostButton,
    CloseAndSettleButton,
    ShowOrdersButton,
    ShowOrdersIcon,
} from './OrderDetails.styles'

class OrderDetails extends React.Component {
    static propTypes = {
        acceptToBeHost: PropTypes.func.isRequired,
        acceptingTobeHost: PropTypes.bool.isRequired,
        closeAndSettle: PropTypes.func.isRequired,
        closingAndSettling: PropTypes.bool.isRequired,
        isCurrentUserHost: PropTypes.bool.isRequired,
        isShowingOrders: PropTypes.bool.isRequired,
        hasHostAccepted: PropTypes.bool.isRequired,
        hasOrderShipped: PropTypes.bool.isRequired,
        hostName: PropTypes.string.isRequired,
        hostPicture: PropTypes.string.isRequired,
        numOrders: PropTypes.number.isRequired,
        onShowOrders: PropTypes.func.isRequired,
        orderId: PropTypes.string.isRequired,
    }

    getHostButton = () => {
        const {
            acceptingTobeHost,
            closingAndSettling,
            hasHostAccepted,
            hasOrderShipped,
            isCurrentUserHost,
        } = this.props

        if (hasOrderShipped) {
            return (
                <span>
                    <i className="fas fa-ship fa-lg" />&nbsp;
                </span>
            )
        }

        if (!hasHostAccepted) {
            const message = isCurrentUserHost
                ? `Accept to be host`
                : `Host this order`
            return (
                <HostButton
                    disabled={acceptingTobeHost}
                    onClick={this.acceptToBeHost}
                >
                    <i className="fas fa-user" />&nbsp;{message}
                </HostButton>
            )
        }

        if (isCurrentUserHost) {
            return (
                <CloseAndSettleButton
                    disabled={closingAndSettling}
                    onClick={this.closeAndSettle}
                >
                    <i className="fas fa-trophy" />&nbsp; Close and Settle
                </CloseAndSettleButton>
            )
        }

        return null
    }

    getHostText = () => {
        const {
            hasHostAccepted,
            hasOrderShipped,
            isCurrentUserHost,
        } = this.props

        if (hasOrderShipped) {
            return <span>This order has already shipped!</span>
        }

        if (!hasHostAccepted) {
            const message = isCurrentUserHost
                ? `You need to accept this order!`
                : `This order needs a host!`
            return <span>{message}</span>
        }

        return (
            <span>
                Place your order, now! &nbsp;
                <i className="fas fa-cart-arrow-down" />
            </span>
        )
    }

    getHostSubText = () => {
        const {
            hasHostAccepted,
            hasOrderShipped,
            isCurrentUserHost,
            hostName,
        } = this.props

        if (!hasHostAccepted) {
            return isCurrentUserHost
                ? `${hostName}, come on mate`
                : `${hostName} is AWOL. Step up and host the order instead! Be the change you want to see in the world 😉`
        }

        if (hasOrderShipped) {
            return isCurrentUserHost
                ? `You hosted this order`
                : `${hostName} hosted this order`
        }

        return isCurrentUserHost
            ? `You are hosting this order. When you've ordered, click 'Close and Settle' to close the order and settle the ledger`
            : `${hostName} is hosting this order`
    }

    acceptToBeHost = () => {
        const { acceptToBeHost, isCurrentUserHost, orderId } = this.props
        acceptToBeHost({ orderId, isCurrentUserHost })
    }

    closeAndSettle = () => {
        const { closeAndSettle, orderId } = this.props
        closeAndSettle({ orderId })
    }

    showOrdersButton = (isShowingOrders, onShowOrdersClick) => {
        const message = isShowingOrders ? 'Hide Orders' : 'Show Orders'
        return (
            <ShowOrdersButton onClick={onShowOrdersClick}>
                {message}
                <ShowOrdersIcon hide={!isShowingOrders}>
                    <i className="fas fa-caret-up" />
                </ShowOrdersIcon>
                <ShowOrdersIcon hide={isShowingOrders}>
                    <i className="fas fa-caret-down" />
                </ShowOrdersIcon>
            </ShowOrdersButton>
        )
    }

    render() {
        const {
            hostPicture,
            isShowingOrders,
            onShowOrders,
            numOrders,
        } = this.props

        return (
            <HostingCard key="host">
                <HostingCardHeader>
                    <HostImg src={hostPicture} />
                    <HostTextContainer>
                        <HostText>{this.getHostText()}</HostText>
                        <HostSubText>{this.getHostSubText()}</HostSubText>
                    </HostTextContainer>
                    <HostButtonContainer>
                        {this.getHostButton()}
                    </HostButtonContainer>
                </HostingCardHeader>
                {numOrders > 0
                    ? this.showOrdersButton(isShowingOrders, onShowOrders)
                    : null}
            </HostingCard>
        )
    }
}

export default OrderDetails
