import styled, { css } from 'styled-components'

import { typography } from 'styles'
import { Card, CardHeader } from 'components/Card/Card.styles'

const hiddenOrderedCard = css`
    max-height: 20px;
    margin-top: -30px;
    padding-top: 20px;
`

export const LatestOrderContainer = styled.div`
    text-align: center;
`

export const OrderCard = Card.extend`
    max-width: calc(80% - 20px);
    overflow: hidden;
    position: relative;
    max-height: 1000px;
    transition: all 0.4s ease-in-out;
    z-index: ${props => 199 - props.index};
    ${props => (!props.isShowingOrders ? hiddenOrderedCard : null)};

    @media (max-width: 600px) {
        max-width: calc(100% - 20px);
    }
`
export const OrderContent = styled.div`
    transition: opacity 0.4s ease-in-out;
    opacity: ${props => (props.isShowingOrders ? 1 : 0)};
`
export const OrderCardHeader = CardHeader.extend`
    min-height: 40px;
`
export const OrderImg = styled.img`
    border-radius: 20px;
    height: 40px;
    position: absolute;
    left: 0;
`
export const OrderText = styled.span`
    flex: 1;
    font-size: 18px;
    margin-left: 60px;
`
export const OrderItemActions = styled.span`
    flex: 1;
    text-align: right;
    cursor: pointer;
`
export const OrderItemName = styled.p`
    font-size: 18px;
    margin: 0 0 5px 60px;
    text-decoration: underline;
`
export const OrderItemOptions = styled.div`
    margin-left: 60px;

    @media (min-width: 800px) {
        display: flex;
    }
`
export const OrderItemOptionSection = styled.div`
    font-size: 16px;
    font-weight: ${typography.fontWeights.BOLD};

    p {
        margin: 0;
    }

    ul {
        margin-top: 0;
    }

    li {
        font-weight: ${typography.fontWeights.NORMAL};
    }

    @media (min-width: 800px) {
        flex: 0 1;
        margin: 0 20px;
    }
`

export const OrderShippedSection = styled.div`
    margin: 48px auto 24px;
`

export const AddOrderHeader = styled.h1`
    margin-top: 30px !important;
`
