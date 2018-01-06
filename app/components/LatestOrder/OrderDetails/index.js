import PropTypes from 'prop-types'
import React from 'react'

import australianize from 'helpers/australianize'

import {
    HostingCard,
    HostingCardHeader,
    HostImg,
    HostTextContainer,
    HostText,
    HostSubText,
    HostButton,
} from './OrderDetails.styles'

class OrderDetails extends React.Component {
    static propTypes = {
        isCurrentUserHost: PropTypes.bool.isRequired,
        hasHostAccepted: PropTypes.bool.isRequired,
        hasOrderShipped: PropTypes.bool.isRequired,
        hostName: PropTypes.string.isRequired,
        hostPicture: PropTypes.string.isRequired,
    }

    state = {
        aussieHostName: '',
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            aussieHostName: australianize(nextProps.hostName),
        })
    }

    getHostButton = () => {
        const {
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
                <HostButton>
                    <i className="fas fa-user" />&nbsp;{message}
                </HostButton>
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
        } = this.props
        const { aussieHostName } = this.state

        if (!hasHostAccepted) {
            return isCurrentUserHost
                ? `${aussieHostName}, come on mate`
                : `${aussieHostName} is AWOL, I know you want to host this banana 😉`
        }

        if (hasOrderShipped) {
            return isCurrentUserHost
                ? `You hosted this order`
                : `${aussieHostName} hosted this order`
        }

        return isCurrentUserHost
            ? `You are hosting this order`
            : `${aussieHostName} is hosting this order`
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
                    {this.getHostButton()}
                </HostingCardHeader>
            </HostingCard>
        )
    }
}

export default OrderDetails
