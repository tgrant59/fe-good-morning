import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { push } from 'react-router-redux'
import styled from 'styled-components'

import NavBar from 'components/NavBar'
import Orders from 'containers/OrdersPage/Loadable'
import Ledgers from 'containers/LedgersPage/Loadable'
import routes from 'routes'
import { colors } from '../../styles'

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
        redirect: PropTypes.func.isRequired,
    }

    static defaultPropTypes = {
        user: null,
    }

    componentDidMount() {
        if (!this.props.user) this.props.redirect(routes.LOGIN)
    }

    render() {
        return (
            <Container>
                <NavBar user={this.props.user} />
                <MainContainer>
                    <Switch>
                        <Route exact path={routes.ORDERS} component={Orders} />
                        <Route
                            exact
                            path={routes.LEDGERS}
                            component={Ledgers}
                        />
                    </Switch>
                    <Footer />
                </MainContainer>
            </Container>
        )
    }
}

const mapStateToProps = state => {
    const loginState = state.get('login')
    return {
        user: loginState ? loginState.get('user') : null,
    }
}

const mapDispatchToProps = {
    redirect: push,
}

const withState = connect(mapStateToProps, mapDispatchToProps)

export default withState(LoggedInView)
