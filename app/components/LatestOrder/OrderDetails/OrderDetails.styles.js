import styled from 'styled-components'

import { ButtonWithWiggle } from 'components/Button/Button.styles'
import { Card, CardHeader } from 'components/Card/Card.styles'

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
export const HostButton = ButtonWithWiggle
