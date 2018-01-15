import PropTypes from 'prop-types'
import React from 'react'

import LoadingSplash from 'components/LoadingSplash'

import { LedgersContainer } from './Ledgers.styles'

const Ledgers = ({ ledgers }) => {
    if (!ledgers) return <LoadingSplash />
    return <LedgersContainer>Loaded</LedgersContainer>
}

Ledgers.propTypes = {
    ledgers: PropTypes.object,
}

Ledgers.defaultProps = {
    ledgers: null,
}

export default Ledgers
