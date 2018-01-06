import { lighten } from 'polished'
import styled from 'styled-components'

import { colors, typography } from 'styles'

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
export const AddButton = styled.button`
    background-color: ${colors.theme.BLUE_DARK};
    border-radius: 4px;
    color: ${colors.basic.WHITE};
    cursor: pointer;
    font-size: 18px;
    font-weight: ${typography.fontWeights.EXTRA_LIGHT};
    margin-top: 20px;
    padding: 10px 30px;
    transition: all 0.2s;
    width: 100%;

    &:hover {
        background-color: ${lighten(0.1, colors.theme.BLUE_DARK)};
    }
`
