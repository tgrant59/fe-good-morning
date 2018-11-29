import styled from 'styled-components'

import { Card, CardHeader } from 'components/Card/Card.styles'

export const LadderContainer = styled.div`
    text-align: center;
`

export const LadderCard = Card.extend`
    max-width: calc(80% - 20px);
    z-index: 199;

    @media (max-width: 600px) {
        max-width: calc(100% - 20px);
    }
`
export const LadderCardHeader = CardHeader.extend`
    min-height: 40px;
`
export const LadderImg = styled.img`
    border-radius: 20px;
    height: 40px;
    position: absolute;
    left: 0;
`
export const LadderText = styled.span`
    flex: 1;
    font-size: 18px;
    margin-left: 60px;
`
export const LadderTextSub = styled.span`
    flex: 3;
    text-align: left;
    font-size: 14px;
    margin-left: 24px;
`
export const LadderAmmount = styled.span`
    text-align: right;
    flex: 1;
    font-size: 24px;
`
