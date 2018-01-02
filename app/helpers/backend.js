import { requestGenerator } from 'helpers/request'

const API_URL = 'https://ed61tixexb.execute-api.us-east-1.amazonaws.com/prod/'

const backendRequestGenerator = method => {
    const methodRequest = requestGenerator(method)
    return (url, token, customOptions = {}) => {
        const options = {
            headers: {
                'Content-Type': 'application/json',
                'x-gauth-token': token,
                ...customOptions.headers,
            },
            ...customOptions,
        }
        const backendUrl = API_URL + url
        return methodRequest(backendUrl, options)
    }
}

export default {
    get: backendRequestGenerator('GET'),
    post: backendRequestGenerator('POST'),
    put: backendRequestGenerator('PUT'),
    patch: backendRequestGenerator('PATCH'),
    delete: backendRequestGenerator('DELETE'),
    options: backendRequestGenerator('OPTIONS'),
    head: backendRequestGenerator('HEAD'),
}
