export const LOG_ERROR = 'fe-marketplace/LogErrors/LOG_ERROR'

export const logError = ({ boundaryName, info, error }) => ({
    type: LOG_ERROR,
    payload: { boundaryName, info, error },
})
