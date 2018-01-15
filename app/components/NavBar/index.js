import PropTypes from 'prop-types'
import React from 'react'

import Banana from 'components/Banana'
import routes from 'routes'

import {
    Container,
    LogoNavItem,
    LogoNavText,
    Name,
    NavItem,
    Spacer,
    UserImg,
    UserNavItem,
} from './NavBar.styles'

const signOut = () => {
    const auth2 = window.gapi.auth2.getAuthInstance()
    auth2.signOut().then(() => {
        window.location.reload()
    })
}

const NavBar = ({ user }) => (
    <Container>
        <LogoNavItem>
            <Banana />
            <LogoNavText>&nbsp; Good Morning, TopHat!</LogoNavText>
        </LogoNavItem>
        <Spacer />
        <NavItem to={routes.ORDERS}>Today</NavItem>
        <NavItem to={routes.LEDGERS}>Ledgers</NavItem>
        <UserNavItem onClick={signOut} title="Click here to signout">
            <UserImg src={user ? user.get('imageUrl') : null} />
            <Name>{user ? user.get('name') : null}</Name>
        </UserNavItem>
    </Container>
)

NavBar.propTypes = {
    user: PropTypes.object,
}

NavBar.defaultProps = {
    user: null,
}

export default NavBar
