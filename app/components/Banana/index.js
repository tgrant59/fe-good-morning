import React from 'react'
import styled from 'styled-components'

const BananaIcon = styled.div`
    display: inline-block;
    font-size: 30px;
`

const Banana = () => (
    <BananaIcon role="img" aria-label="banana emoji">
        🍌
    </BananaIcon>
)

export default Banana
