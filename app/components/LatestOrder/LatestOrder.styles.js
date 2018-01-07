import styled from 'styled-components'

import { typography } from 'styles'
import { Card, CardHeader } from 'components/Card/Card.styles'

export const LatestOrderContainer = styled.div`
    text-align: center;
`

export const OrderCard = Card.extend`
    max-width: calc(80% - 20px);
    z-index: 199;

    @media (max-width: 600px) {
        max-width: calc(100% - 20px);
    }
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
