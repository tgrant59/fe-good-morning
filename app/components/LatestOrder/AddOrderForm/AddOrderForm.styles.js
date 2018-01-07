import styled from 'styled-components'

import { Button } from 'components/Button/Button.styles'
import { Card } from 'components/Card/Card.styles'

export const AddCard = Card.extend`
    max-width: 80%;

    @media (max-width: 600px) {
        max-width: 100%;
    }
`
export const AddOptionHeader = styled.h3`
    margin-bottom: 5px;
    margin-top: 10px !important;
`
export const AddOptionSections = styled.div`
    @media (min-width: 800px) {
        display: flex;
    }
`
export const AddOptionSection = styled.div`
    @media (min-width: 800px) {
        flex: 0;
        margin-right: 40px;
        white-space: nowrap;
    }
`
export const AddButton = Button.extend`
    margin-top: 20px;
    width: 100%;
`
