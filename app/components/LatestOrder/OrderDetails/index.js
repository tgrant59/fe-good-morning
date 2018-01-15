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
} from './OrderDetails.styles'

class OrderDetails extends React.Component {
    static propTypes = {
        acceptToBeHost: PropTypes.func.isRequired,
        acceptingTobeHost: PropTypes.bool.isRequired,
        closeAndSettle: PropTypes.func.isRequired,
        closingAndSettling: PropTypes.bool.isRequired,
        isCurrentUserHost: PropTypes.bool.isRequired,
        hasHostAccepted: PropTypes.bool.isRequired,
        hasOrderShipped: PropTypes.bool.isRequired,
        hostName: PropTypes.string.isRequired,
        hostPicture: PropTypes.string.isRequired,
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
            return (
                <span>
                    This order has already shipped! &nbsp;
                    <i className="fas fa-ship" />
                </span>
            )
        }

        if (!hasHostAccepted) {
            const message = isCurrentUserHost
                ? `You need to accept this order!`
                : `This order needs a host!`
            return (
                <span>
                    {message} &nbsp;
                    <i className="fas fa-user" />
                </span>
            )
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
                : `${hostName} is AWOL, I know you want to host this banana 😉`
        }

        if (hasOrderShipped) {
            return isCurrentUserHost
                ? `You hosted this order`
                : `${hostName} hosted this order`
        }

        return isCurrentUserHost
            ? `You are hosting this order, when you're done click 'Close and Settle' to Close this order, and settle ledgers`
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

    render() {
        const { hostPicture } = this.props

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
            </HostingCard>
        )
    }
}

export default OrderDetails
