import PropTypes from 'prop-types'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { darken } from 'polished'

import { colors } from 'styles'
import routes from 'routes'

const Container = styled.div`
    background-color: ${colors.basic.ORANGE};
    color: ${colors.basic.WHITE};
    display: flex;
    height: 60px;
    width: 100%;
`
const Spacer = styled.div`
    flex: 1;
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
        color: ${colors.basic.WHITE};
        background-color: ${darken(0.1, colors.basic.ORANGE)};
    }
`
const UserNavItem = styled.div`
    flex: 0 1;
    display: flex;
    height: 60px;
    padding: 0 20px;
`
const IMG = styled.img`
    flex: 0 1;
    height: 40px;
    margin: 10px;
`
const Name = styled.div`
    flex: 0 1;
    height: 60px;
    line-height: 60px;
    white-space: nowrap;
`

const NavBar = ({ user }) => {
    console.log(user.toJS())
    return (
        <Container>
            <Spacer />
            <NavItem to={routes.ORDERS}>Orders</NavItem>
            <NavItem to={routes.ORDERS}>Ledger</NavItem>
            <NavItem to={routes.ORDERS}>History</NavItem>
            <UserNavItem>
                <IMG src={user.get('imageUrl')} />
                <Name>{user.get('name')}</Name>
            </UserNavItem>
        </Container>
    )
}

NavBar.propTypes = {
    user: PropTypes.object,
}

export default NavBar
