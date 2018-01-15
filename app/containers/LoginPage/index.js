import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { compose } from 'redux'
import styled from 'styled-components'

import MadeWithLove from 'components/MadeWithLove'
import LoginPanel from 'components/LoginPanel'
import routes from 'routes'
import injectReducer from 'utils/injectReducer'

import { loginSuccess, loginFailure } from '../../ducks/Login/Login.actions'
import reducer from '../../ducks/Login/Login.reducer'

const PageContainer = styled.div`
    height: 100%;
    position: relative;
    width: 100%;
`

export class Login extends React.PureComponent {
    static propTypes = {
        isErrored: PropTypes.bool,
        onGoogleSuccess: PropTypes.func.isRequired,
        onGoogleFail: PropTypes.func.isRequired,
        redirect: PropTypes.func.isRequired,
        userData: PropTypes.object,
    }

    static defaultProps = {
        isErrored: false,
        userData: null,
    }

    componentWillMount() {
        if (this.props.userData) {
            this.props.redirect(routes.ORDERS)
        }
    }

    onLoginSuccess = googleUser => {
        this.props.onGoogleSuccess(googleUser)
        this.props.redirect(routes.ORDERS)
    }

    render() {
        return (
            <PageContainer>
                <LoginPanel
                    onGoogleFail={this.props.onGoogleFail}
                    onGoogleSuccess={this.onLoginSuccess}
                    isErrored={this.props.isErrored}
                />
                <MadeWithLove />
            </PageContainer>
        )
    }
}

const mapStateToProps = state => {
    const loginState = state.get('login')
    if (!loginState) return {}
    return {
        isErrored: loginState.get('loginError'),
        userData: loginState.get('user'),
    }
}

const mapDispatchToProps = {
    redirect: push,
    onGoogleSuccess: loginSuccess,
    onGoogleFail: loginFailure,
}

const withState = compose(
    injectReducer({ key: 'login', reducer }),
    connect(mapStateToProps, mapDispatchToProps),
)

export default withState(Login)
