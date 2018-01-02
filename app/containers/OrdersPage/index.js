import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import styled from 'styled-components'

import LatestOrder from 'components/LatestOrder'
import { loadLatestOrder } from 'ducks/Orders/Orders.actions'
import ordersReducer from 'ducks/Orders/Orders.reducer'
import ordersSaga from 'ducks/Orders/Orders.saga'
import { selectOrder } from 'ducks/Orders/Orders.selectors'
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
        order: PropTypes.object,
        loadLatestOrder: PropTypes.func.isRequired,
    }

    static defaultProps = {
        order: null,
    }

    componentDidMount() {
        this.props.loadLatestOrder()
    }

    render() {
        return (
            <Container>
                <LatestOrder order={this.props.order} />
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    order: selectOrder(state),
})

const mapDispatchToProps = {
    loadLatestOrder,
}

const withState = compose(
    connect(mapStateToProps, mapDispatchToProps),
    injectReducer({ key: 'orders', reducer: ordersReducer }),
    injectReducer({ key: 'users', reducer: usersReducer }),
    injectSaga({ key: 'orders', saga: ordersSaga }),
    injectSaga({ key: 'users', saga: usersSaga }),
)

export default withState(Orders)
