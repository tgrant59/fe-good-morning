import styled, { keyframes } from 'styled-components'

import { colors, typography } from 'styles'

const Card = styled.div`
    background-color: ${colors.basic.WHITE};
    box-shadow: rgba(0, 0, 0, 0.117647) 0 1px 6px,
        rgba(0, 0, 0, 0.117647) 0 1px 4px;
    padding: 20px;
    margin: 0 auto 6px;
`
const CardHeader = styled.div`
    align-items: center;
    display: flex;
    position: relative;
`

const wiggleAnimation = keyframes`
    0% {
        transform: rotate(3deg);
    }

    50% {
        transform: rotate(-3deg);
    }

    100% {
        transform: rotate(3deg);
    }
`
const Button = styled.div`
    display: flex;
    margin: 10px;
    padding: 12px;
    cursor: pointer;
    user-select: none;
    transition: all 150ms linear;
    text-align: center;
    white-space: nowrap;
    text-transform: uppercase;
    color: #fff;
    border: 0 none;
    font-size: 13px;
    font-weight: 500;
    line-height: 1.3;
    background-color: #416dea;
    box-shadow: 2px 5px 10px #e4e4e4;
    animation: 1s ${wiggleAnimation} ease-out infinite;

    &:hover {
        transition: all 150ms linear;
        opacity: 0.85;
    }
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
export const HostTextContainer = styled.span`
    flex: 1;
    font-size: 20px;
    margin-left: 80px;
`
export const HostText = styled.div`
    font-size: 20px;
`
export const HostSubText = styled.div`
    font-size: 13px;
    margin-top: 4px;
`
export const HostButton = Button

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
export const OrderItemOptionSection = styled.div`
    font-size: 16px;
    font-weight: ${typography.fontWeights.BOLD};
    margin-left: 60px;

    p {
        margin: 0;
    }

    ul {
        margin-top: 0;
    }

    li {
        font-weight: ${typography.fontWeights.NORMAL};
    }
`
