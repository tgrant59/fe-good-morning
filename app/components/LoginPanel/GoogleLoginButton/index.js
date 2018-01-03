import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import GImageSrc from './google-login.png'

const LoginButton = styled.div`
    display: inline-block;
    cursor: pointer;
`

class GoogleLoginButton extends React.PureComponent {
    state = {
        isLoading: true,
    }

    componentDidMount() {
        this.injectScript()
    }

    onScriptLoad = () => {
        window.gapi.load('auth2', this.googleAuthReady)
    }

    authParams = () => ({
        client_id: this.props.clientId,
        cookie_policy: 'single_host_origin',
        fetch_basic_profile: true,
        scope: 'profile email',
    })

    googleAuthReady = () => {
        if (!window.gapi.auth2.getAuthInstance()) {
            window.gapi.auth2.init(this.authParams()).then(
                res => {
                    if (res.isSignedIn.get()) {
                        this.handleSigninSuccess(res.currentUser.get())
                    } else {
                        this.hasFinishedLoading()
                    }
                },
                () => {
                    this.hasFinishedLoading()
                },
            )
        } else {
            this.hasFinishedLoading()
        }
    }

    hasFinishedLoading = () => {
        this.setState({
            isLoading: false,
        })
    }

    injectScript = () => {
        const firstScript = document.getElementsByTagName('script')[0]
        const js = document.createElement('script')
        js.id = 'google-login'
        js.src = '//apis.google.com/js/client:platform.js'
        firstScript.parentNode.insertBefore(js, firstScript)
        js.onload = this.onScriptLoad
    }

    signIn = e => {
        if (e) {
            e.preventDefault() // to prevent submit if used within form
        }

        const auth2 = window.gapi.auth2.getAuthInstance()
        auth2
            .signIn({
                prompt: '',
            })
            .then(
                res => this.handleSigninSuccess(res),
                err => this.props.onFailure(err),
            )
    }

    keepSignedIn = () => {
        if (!window.gapi.auth2.getAuthInstance()) {
            window.gapi.auth2.init(this.authParams()).then(
                res => {
                    if (res.isSignedIn.get()) {
                        this.props.onSuccess(
                            this.buildSuccessResponse(res.currentUser.get()),
                        )
                    } else {
                        window.location.reload()
                    }
                },
                () => {
                    window.location.reload()
                },
            )
        }
    }

    buildSuccessResponse = res => {
        const basicProfile = res.getBasicProfile()
        const authResponse = res.getAuthResponse()
        res.googleId = basicProfile.getId()
        res.tokenObj = authResponse
        res.tokenId = authResponse.id_token
        res.accessToken = authResponse.access_token
        res.profileObj = {
            googleId: basicProfile.getId(),
            imageUrl: basicProfile.getImageUrl(),
            email: basicProfile.getEmail(),
            name: basicProfile.getName(),
            givenName: basicProfile.getGivenName(),
            familyName: basicProfile.getFamilyName(),
        }
        return res
    }

    handleSigninSuccess = res => {
        window.setInterval(this.keepSignedIn, 200)
        this.props.onSuccess(this.buildSuccessResponse(res))
    }

    render() {
        if (this.state.isLoading) {
            return 'Loading...'
        }

        return (
            <LoginButton onClick={this.signIn}>
                <img alt="Sign in with Google" src={GImageSrc} />
            </LoginButton>
        )
    }
}

GoogleLoginButton.propTypes = {
    onSuccess: PropTypes.func.isRequired,
    onFailure: PropTypes.func.isRequired,
    clientId: PropTypes.string.isRequired,
}

export default GoogleLoginButton
