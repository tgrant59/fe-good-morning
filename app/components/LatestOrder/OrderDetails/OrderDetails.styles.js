import styled from 'styled-components'

import { colors } from 'styles'

import { ButtonWithWiggle } from 'components/Button/Button.styles'
import { Card, CardHeader } from 'components/Card/Card.styles'

export const HostingCard = Card.extend`
    max-width: 80%;
    position: relative;
    z-index: 200;

    @media (max-width: 600px) {
        max-width: 100%;
    }
`
export const HostingCardHeader = CardHeader.extend`
    flex-wrap: wrap;
    justify-content: center;
    min-height: 60px;
`
export const HostButtonContainer = styled.div`
    flex: 0 0;
`
export const HostImg = styled.img`
    flex: 0 0;
    border-radius: 30px;
    height: 60px;
    left: 0;
`
export const HostTextContainer = styled.span`
    flex: 1 0;
    font-size: 20px;
    margin-left: 20px;
    min-width: 180px;
`
export const HostText = styled.div`
    font-size: 20px;
`
export const HostSubText = styled.div`
    font-size: 13px;
    margin-top: 4px;
`
export const HostButton = ButtonWithWiggle.extend`
    font-size: 15px;
`
export const CloseAndSettleButton = ButtonWithWiggle.extend`
    font-size: 15px;
    background-color: ${colors.theme.PURPLE};
`
export const ShowOrdersButton = styled.div`
    cursor: pointer;
    font-size: 18px;
    margin-top: 20px;
`
export const ShowOrdersIcon = styled.div`
    display: ${props => (props.hide ? 'none' : 'inline-block')};
    margin-left: 6px;
`
