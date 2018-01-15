import styled from 'styled-components'

import { Card, CardHeader } from 'components/Card/Card.styles'

export const LedgersContainer = styled.div`
    text-align: center;
`

export const LedgerCard = Card.extend`
    max-width: calc(80% - 20px);
    z-index: 199;

    @media (max-width: 600px) {
        max-width: calc(100% - 20px);
    }
`
export const LedgerCardHeader = CardHeader.extend`
    min-height: 40px;
`
export const LedgerImg = styled.img`
    border-radius: 20px;
    height: 40px;
    position: absolute;
    left: 0;
`
export const LedgerText = styled.span`
    flex: 1;
    font-size: 18px;
    margin-left: 60px;
`
export const LedgerAmmount = styled.span`
    text-align: right;
    flex: 1;
    font-size: 24px;
`
