import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

import australianize from 'helpers/australianize'
import { colors } from 'styles'
import routes from 'routes'

const Container = styled.div`
    background: linear-gradient(135deg, #5680e9 0%, #5ab9ea 100%);
    color: ${colors.basic.WHITE};
    display: flex;
    height: 60px;
    width: 100%;
`
const Spacer = styled.div`
    flex: 1;
`
const activeCss = css`
    color: ${colors.basic.WHITE};
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);
`
const NavItem = styled(Link)`
    color: ${colors.basic.WHITE};
    cursor: pointer;
    flex: 0 1;
    height: 60px;
    line-height: 60px;
    padding: 0 20px;
    transition: all 0.2s;

    &:hover {
        ${activeCss};
    }

    @media (max-width: 600px) {
        padding: 0 10px;
    }
`
const UserNavItem = styled.div`
    flex: 0 1;
    display: flex;
    height: 60px;
    padding: 0 20px;
    cursor: pointer;

    &:hover {
        ${activeCss};
    }

    @media (max-width: 600px) {
        padding: 0 10px;
    }
`
const LogoNavItem = styled.div`
    flex: 0 1;
    height: 60px;
    font-size: 17px;
    line-height: 60px;
    padding: 0 20px;
    white-space: nowrap;
`
const LogoNavText = styled.span`
    @media (max-width: 600px) {
        display: none;
    }
`
const IMG = styled.img`
    border-radius: 20px;
    flex: 0 1;
    height: 40px;
    margin: 10px 10px 10px 0;
`
const Name = styled.div`
    flex: 0 1;
    height: 60px;
    line-height: 60px;
    white-space: nowrap;

    @media (max-width: 600px) {
        display: none;
    }
`

const signOut = () => {
    const auth2 = window.gapi.auth2.getAuthInstance()
    auth2.signOut().then(() => {
        window.location.reload()
    })
}

const NavBar = ({ user }) => (
    <Container>
        <LogoNavItem>
            <i className="fas fa-utensils fa-lg" />
            <LogoNavText>
                &nbsp; Good Morning, TopHat!
                <span role="img" aria-label="banana emoji">
                    🍌
                </span>
            </LogoNavText>
        </LogoNavItem>
        <Spacer />
        <NavItem to={routes.ORDERS}>Today</NavItem>
        <NavItem to={routes.ORDERS}>Ledger</NavItem>
        <NavItem to={routes.ORDERS}>History</NavItem>
        <UserNavItem onClick={signOut} title="Click here to signout">
            <IMG src={user ? user.get('imageUrl') : null} />
            <Name>{user ? australianize(user.get('name')) : null}</Name>
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
