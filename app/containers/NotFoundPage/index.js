import React from 'react'

import messages from './NotFoundPage.messages'

const NotFoundPage = () => (
    <p>
        {messages.notFoundMessage}
        <br />
        <a href="/">Back to App</a>
    </p>
)

export default NotFoundPage
