import React from 'react'
import PropTypes from 'prop-types'

import LoadingSplash from '../LoadingSplash'

const PageLoading = ({ error, pastDelay }) => {
    if (error) {
        return <p>Error Loading Component</p>
    } else if (pastDelay) {
        return <LoadingSplash />
    }
    return null
}

PageLoading.propTypes = {
    error: PropTypes.bool,
    pastDelay: PropTypes.bool,
}

PageLoading.defaultProps = {
    error: false,
    pastDelay: false,
}

export default PageLoading
