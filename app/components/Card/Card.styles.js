import styled from 'styled-components'

import { colors } from 'styles'

export const Card = styled.div`
    background-color: ${colors.basic.WHITE};
    box-shadow: rgba(0, 0, 0, 0.117647) 0 1px 6px,
        rgba(0, 0, 0, 0.117647) 0 1px 4px;
    padding: 20px;
    margin: 0 auto 6px;
    text-align: left;
`
export const CardHeader = styled.div`
    align-items: center;
    display: flex;
    position: relative;
`
