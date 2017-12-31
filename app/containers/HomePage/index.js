import React from 'react'
import styled from 'styled-components'

import { colors } from 'styles'

const Container = styled.div`
    background-color: ${colors.basic.GREEN};
    height: 100%;
    width: 100%;
`

export function HomePage() {
    return <Container>Hello, World!</Container>
}

export default HomePage
