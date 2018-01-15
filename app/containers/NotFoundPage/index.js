import React from 'react'

import MadeWithLove from 'components/MadeWithLove'

import messages from './NotFoundPage.messages'

const NotFoundPage = () => (
    <p>
        {messages.notFoundMessage}
        <br />
        <a href="/">Back to App</a>
        <MadeWithLove />
    </p>
)

export default NotFoundPage
