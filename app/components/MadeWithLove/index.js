import React from 'react'
import styled from 'styled-components'

import { colors } from 'styles'

export const MadeWithLoveContainer = styled.div`
    bottom: 10px;
    color: ${colors.basic.GRAY_LIGHT};
    left: 50%;
    margin-left: -100px;
    position: absolute;
    width: 200px;
`

const MadeWithLove = () => (
    <MadeWithLoveContainer>
        Made with &#9829; by Jakeo and Tomo
    </MadeWithLoveContainer>
)

export default MadeWithLove
