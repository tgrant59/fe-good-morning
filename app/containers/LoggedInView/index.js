import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { Switch, Route } from 'react-router-dom'
import { push } from 'react-router-redux'
import styled from 'styled-components'

import { loadUsers } from 'ducks/Users/Users.actions'

import NavBar from 'components/NavBar'
import MadeWithLove from 'components/MadeWithLove'
import Orders from 'containers/OrdersPage/Loadable'
import Ledgers from 'containers/LedgersPage/Loadable'
import Ladder from 'containers/LadderPage/Loadable'
import routes from 'routes'
import { colors } from 'styles'
import injectSaga from '../../utils/injectSaga'
import usersSaga from '../../ducks/Users/Users.saga'
import usersReducer from '../../ducks/Users/Users.reducer'
import injectReducer from '../../utils/injectReducer'

const Container = styled.div`
    height: 100%;
    overflow-y: auto;
`
const MainContainer = styled.div`
    background-color: ${colors.basic.GRAY_LIGHTEST};
    min-height: calc(100% - 60px);
    padding-bottom: 20px;
    position: relative;
`

// background: linear-gradient(135deg, #5ab9ea 0%, #5680e9 100%);
const Footer = styled.div`
    bottom: 0;
    height: 20px;
    position: absolute;
    width: 100%;
`

export class LoggedInView extends React.PureComponent {
    static propTypes = {
        user: PropTypes.object,
        userFromOurDB: PropTypes.object,
        loadUsers: PropTypes.func.isRequired,
        redirect: PropTypes.func.isRequired,
    }

    static defaultPropTypes = {
        user: null,
        userFromOurDB: null,
    }

    componentDidMount() {
        if (!this.props.user) this.props.redirect(routes.LOGIN)
        if (this.props.user) {
            if (this.props.user.get('googleId')) {
                this.props.loadUsers([this.props.user.get('googleId')])
            }
        }
    }

    render() {
        return (
            <Container>
                <NavBar user={this.props.userFromOurDB} />
                <MainContainer>
                    <Switch>
                        <Route exact path={routes.ORDERS} component={Orders} />
                        <Route
                            exact
                            path={routes.LEDGERS}
                            component={Ledgers}
                        />
                        <Route
                            exact
                            path={routes.LADDER}
                            component={Ladder}
                        />
                    </Switch>
                    <Footer />
                    <MadeWithLove />
                </MainContainer>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    const loginState = state.get('login')
    const userState = state.get('users')
    const user = loginState ? loginState.get('user') : null
    let userFromOurDB = null
    if (userState && user) {
        userFromOurDB = userState.getIn(['users', user.get('googleId')], null)
    }

    return {
        user,
        userFromOurDB,
    }
}

const mapDispatchToProps = {
    redirect: push,
    loadUsers,
}

const withState = compose(
    injectReducer({ key: 'users', reducer: usersReducer }),
    injectSaga({ key: 'users', saga: usersSaga }),
    connect(mapStateToProps, mapDispatchToProps),
)

export default withState(LoggedInView)
