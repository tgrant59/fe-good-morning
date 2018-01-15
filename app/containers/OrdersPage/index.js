import Immutable from 'immutable'
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import styled from 'styled-components'

import LatestOrder from 'components/LatestOrder'
import { loadItems } from 'ducks/Items/Items.actions'
import itemsReducer from 'ducks/Items/Items.reducer'
import itemsSaga from 'ducks/Items/Items.saga'
import { selectItems } from 'ducks/Items/Items.selectors'
import {
    acceptToBeHost,
    closeAndSettle,
    addOrder,
    removeItem,
    loadLatestOrder,
} from 'ducks/Orders/Orders.actions'
import ordersReducer from 'ducks/Orders/Orders.reducer'
import ordersSaga from 'ducks/Orders/Orders.saga'
import {
    selectAcceptingTobeHost,
    selectClosingAndSettling,
    selectOrder,
    selectHasOrdered,
    selectIsOrdering,
} from 'ducks/Orders/Orders.selectors'
import usersReducer from 'ducks/Users/Users.reducer'
import usersSaga from 'ducks/Users/Users.saga'
import injectReducer from 'utils/injectReducer'
import injectSaga from 'utils/injectSaga'

const Container = styled.div`
    height: 100%;
    padding: 20px;
    width: 100%;
`

export class Orders extends React.PureComponent {
    static propTypes = {
        acceptToBeHost: PropTypes.func.isRequired,
        acceptingTobeHost: PropTypes.bool,
        addOrder: PropTypes.func.isRequired,
        removeItem: PropTypes.func.isRequired,
        closeAndSettle: PropTypes.func.isRequired,
        closingAndSettling: PropTypes.bool,
        hasOrdered: PropTypes.bool,
        isOrdering: PropTypes.bool,
        items: PropTypes.object,
        order: PropTypes.object,
        currentUser: PropTypes.object,
        loadItems: PropTypes.func.isRequired,
        loadLatestOrder: PropTypes.func.isRequired,
    }

    static defaultProps = {
        acceptingTobeHost: false,
        closingAndSettling: false,
        hasOrdered: false,
        isOrdering: false,
        items: new Immutable.List(),
        order: null,
    }

    componentDidMount() {
        this.props.loadLatestOrder()
        this.props.loadItems()
    }

    render() {
        return (
            <Container>
                <LatestOrder
                    acceptToBeHost={this.props.acceptToBeHost}
                    acceptingTobeHost={this.props.acceptingTobeHost}
                    closeAndSettle={this.props.closeAndSettle}
                    closingAndSettling={this.props.closingAndSettling}
                    addOrder={this.props.addOrder}
                    removeItem={this.props.removeItem}
                    hasOrdered={this.props.hasOrdered}
                    isOrdering={this.props.isOrdering}
                    items={this.props.items}
                    order={this.props.order}
                    currentUser={this.props.currentUser}
                />
            </Container>
        )
    }
}

const mapStateToProps = state => {
    const loginState = state.get('login')
    return {
        acceptingTobeHost: selectAcceptingTobeHost(state),
        closingAndSettling: selectClosingAndSettling(state),
        hasOrdered: selectHasOrdered(state),
        isOrdering: selectIsOrdering(state),
        items: selectItems(state),
        order: selectOrder(state),
        currentUser: loginState ? loginState.get('user') : null,
    }
}

const mapDispatchToProps = {
    acceptToBeHost,
    closeAndSettle,
    addOrder,
    removeItem,
    loadItems,
    loadLatestOrder,
}

const withState = compose(
    connect(mapStateToProps, mapDispatchToProps),
    injectReducer({ key: 'orders', reducer: ordersReducer }),
    injectReducer({ key: 'users', reducer: usersReducer }),
    injectReducer({ key: 'items', reducer: itemsReducer }),
    injectSaga({ key: 'orders', saga: ordersSaga }),
    injectSaga({ key: 'users', saga: usersSaga }),
    injectSaga({ key: 'items', saga: itemsSaga }),
)

export default withState(Orders)
