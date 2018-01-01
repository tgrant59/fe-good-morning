import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { push } from 'react-router-redux'

import Orders from 'containers/Orders/Loadable'
import routes from 'routes'

export class LoggedInView extends React.PureComponent {
    static propTypes = {
        user: PropTypes.object,
        redirect: PropTypes.func.isRequired,
    }

    static defaultPropTypes = {
        user: null,
    }

    componentDidMount() {
        if (!this.props.user) this.props.redirect(routes.LOGIN)
    }

    render() {
        return (
            // TODO: Put app navbar here
            <Switch>
                <Route exact path={routes.ORDERS} component={Orders} />
            </Switch>
        )
    }
}

const mapStateToProps = state => {
    const loginState = state.get('login')
    return {
        user: loginState ? loginState.get('user') : null,
    }
}

const mapDispatchToProps = {
    redirect: push,
}

const withState = connect(mapStateToProps, mapDispatchToProps)

export default withState(LoggedInView)
