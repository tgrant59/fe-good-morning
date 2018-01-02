import { darken } from 'polished'
import styled from 'styled-components'

import { colors } from 'styles'

import { Card } from '../LatestOrder.styles'

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
export const AddButton = styled.button`
    background-color: ${colors.basic.ORANGE};
    border-radius: 4px;
    color: ${colors.basic.WHITE};
    cursor: pointer;
    font-size: 18px;
    padding: 10px 30px;
    margin-top: 20px;
    width: 100%;

    &:hover {
        background-color: ${darken(0.1, colors.basic.ORANGE)};
    }
`
