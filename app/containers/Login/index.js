import PropTypes from 'prop-types'
import React from 'react'
import GoogleLogin from 'react-google-login'
import styled from 'styled-components'

import { colors } from 'styles'

const PageContainer = styled.div`
    height: 100%;
    width: 100%;
`
const LoginContainer = styled.div`
    width: 400px;
    margin: auto;
`

export class HomePage extends React.PureComponent {
    static propTypes = {
        onGoogleSuccess: PropTypes.func.isRequired,
        onGoogleFail: PropTypes.func.isRequired,
    }

    render() {
        return (
            <PageContainer>
                <GoogleLogin
                    clientId="979241073886-66fsr3mmbnsi2bvfs6n8d380nh1o4tpd.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={this.props.onGoogleSuccess}
                    onFailure={this.props.onGoogleFail}
                />
            </PageContainer>
        )
    }
}



export default HomePage
