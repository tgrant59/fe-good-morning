import 'whatwg-fetch'

const defaultOptions = {
    credentials: 'same-origin',
}

export const requestGenerator = method => {
    const methodOptions = { method }
    // eslint-disable-next-line func-names
    return async function(url, customOptions = {}) {
        let response
        let data

        const options = Object.assign(
            customOptions,
            methodOptions,
            defaultOptions,
            {},
        )

        try {
            response = await fetch(url, options)
            data = await response.json()
        } catch (error) {
            if (process.env.NODE_ENV !== 'production') {
                console.log('Request error:', error) // eslint-disable-line no-console
            }
            throw error
        }

        if (response.status >= 500) {
            throw new Error(`Request error: ${response.status}`)
        }

        return {
            data,
            headers: response.headers,
            rawResponse: response,
            status: response.status,
        }
    }
}

export default {
    get: requestGenerator('GET'),
    post: requestGenerator('POST'),
    put: requestGenerator('PUT'),
    patch: requestGenerator('PATCH'),
    delete: requestGenerator('DELETE'),
    options: requestGenerator('OPTIONS'),
    head: requestGenerator('HEAD'),
}
