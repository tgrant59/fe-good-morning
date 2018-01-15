import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

import { colors } from 'styles'

export const Container = styled.div`
    background: linear-gradient(135deg, #5680e9 0%, #5ab9ea 100%);
    color: ${colors.basic.WHITE};
    display: flex;
    height: 60px;
    width: 100%;
`
export const Spacer = styled.div`
    flex: 1;
`
export const activeCss = css`
    color: ${colors.basic.WHITE};
    box-shadow: inset 0 0 100px 100px rgba(255, 255, 255, 0.1);
`
export const NavItem = styled(Link)`
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
export const UserNavItem = styled.div`
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
export const LogoNavItem = styled.div`
    display: flex;
    flex: 0 1;
    height: 60px;
    font-size: 17px;
    line-height: 60px;
    padding: 0 20px;
    white-space: nowrap;
`
export const LogoNavText = styled.div`
    @media (max-width: 600px) {
        display: none;
    }
`
export const UserImg = styled.img`
    border-radius: 20px;
    flex: 0 1;
    height: 40px;
    margin: 10px 10px 10px 0;
`
export const Name = styled.div`
    flex: 0 1;
    height: 60px;
    line-height: 60px;
    white-space: nowrap;

    @media (max-width: 600px) {
        display: none;
    }
`
