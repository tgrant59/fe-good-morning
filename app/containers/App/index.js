import React from 'react'
import { Helmet } from 'react-helmet'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

import Orders from 'containers/Orders/Loadable'
import LogErrors from 'containers/LogErrors'
import Login from 'containers/Login/Loadable'
import NotFoundPage from 'containers/NotFoundPage/Loadable'
import routes from 'routes'
import { DAEMON } from 'utils/constants'
import injectSaga from 'utils/injectSaga'

import messages from './App.messages'
import saga from './App.saga'

const AppWrapper = styled.div`
    height: 100%;
    padding: 0;
    position: fixed;
    width: 100%;
`

// TODO: Put app navbar here
export const LoggedInView = () => (
    <Switch>
        <Route exact path={routes.ORDERS} component={Orders} />
    </Switch>
)

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
