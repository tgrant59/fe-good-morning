import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import Banana from 'components/Banana'
import { colors } from 'styles'

import GoogleLoginButton from './GoogleLoginButton'

export const LoginPanelContainer = styled.div`
    height: 100px;
    left: 50%;
    margin: -100px 0 0 -200px;
    position: absolute;
    width: 400px;
    top: 50%;
    text-align: center;
`
export const LoginTitle = styled.div`
    font-size: 24px;
    margin-bottom: 20px;
`
export const LoginSubText = styled.div`
    font-size: 14px;
    margin-top: 12px;
`
export const ErrorMessage = styled.div`
    color: ${colors.basic.RED};
    margin-top: 20px;
`

const getErrorMessage = () => (
    <ErrorMessage>Uh oh, we cannot log you in. Try again</ErrorMessage>
)

class LoginPanel extends React.PureComponent {
    render() {
        return (
            <LoginPanelContainer>
                <LoginTitle>
                    <Banana />
                    <span>&nbsp; Good Morning, Top Hat!</span>
                </LoginTitle>
                <GoogleLoginButton
                    clientId="979241073886-66fsr3mmbnsi2bvfs6n8d380nh1o4tpd.apps.googleusercontent.com"
                    onSuccess={this.props.onGoogleSuccess}
                    onFailure={this.props.onGoogleFail}
                />
                <LoginSubText>
                    (use your <strong>@tophat</strong> account)
                </LoginSubText>
                {this.props.isErrored ? getErrorMessage() : null}
            </LoginPanelContainer>
        )
    }
}

LoginPanel.propTypes = {
    isErrored: PropTypes.bool,
    onGoogleFail: PropTypes.func.isRequired,
    onGoogleSuccess: PropTypes.func.isRequired,
}

LoginPanel.defaultProps = {
    isErrored: false,
}

export default LoginPanel
