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
