import React from 'react'
import { Helmet } from 'react-helmet'
import { Switch, Route } from 'react-router-dom'

import LogErrors from 'containers/LogErrors'
import Login from 'containers/LoginPage/Loadable'
import LoggedInView from 'containers/LoggedInView'
import NotFoundPage from 'containers/NotFoundPage/Loadable'
import routes from 'routes'
import { DAEMON } from 'utils/constants'
import injectSaga from 'utils/injectSaga'

import messages from './App.messages'
import saga from './App.saga'
import { AppWrapper } from './App.styles'

export function App() {
    return (
        <AppWrapper>
            <Helmet
                titleTemplate={messages.helmet.titleTemplate}
                defaultTitle={messages.helmet.defaultTitle}
            >
                <meta
                    name="description"
                    content={messages.helmet.description}
                />
            </Helmet>
            <LogErrors boundaryName="routes">
                <Switch>
                    <Route exact path={routes.LOGIN} component={Login} />
                    <Route path={routes.BASE} component={LoggedInView} />
                    <Route component={NotFoundPage} />
                </Switch>
            </LogErrors>
        </AppWrapper>
    )
}

const withSaga = injectSaga({ key: 'logErrors', saga, mode: DAEMON })

export default withSaga(App)
