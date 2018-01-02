import styled from 'styled-components'

import { colors, typography } from 'styles'

export const LatestOrderContainer = styled.div`
    text-align: center;
`

export const Card = styled.div`
    background-color: ${colors.basic.WHITE};
    box-shadow: rgba(0, 0, 0, 0.117647) 0 1px 6px,
        rgba(0, 0, 0, 0.117647) 0 1px 4px;
    padding: 20px;
    margin: 0 auto 6px;
    text-align: left;
`
const CardHeader = styled.div`
    align-items: center;
    display: flex;
    position: relative;
`

export const HostingCard = Card.extend`
    max-width: 80%;
    z-index: 200;

    @media (max-width: 600px) {
        max-width: 100%;
    }
`
export const HostingCardHeader = CardHeader.extend`
    min-height: 60px;
`
export const HostImg = styled.img`
    border-radius: 30px;
    height: 60px;
    position: absolute;
    left: 0;
`
export const HostText = styled.span`
    flex: 1;
    font-size: 20px;
    margin-left: 80px;
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
