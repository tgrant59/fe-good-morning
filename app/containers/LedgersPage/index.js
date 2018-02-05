import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import styled from 'styled-components'

import Ledgers from 'components/Ledgers'
import { loadLedgers } from 'ducks/Ledgers/Ledgers.actions'
import ledgersReducer from 'ducks/Ledgers/Ledgers.reducer'
import ledgersSaga from 'ducks/Ledgers/Ledgers.saga'
import { selectLedgers } from 'ducks/Ledgers/Ledgers.selectors'
import injectReducer from 'utils/injectReducer'
import injectSaga from 'utils/injectSaga'

const Container = styled.div`
    height: 100%;
    padding: 20px;
    width: 100%;
`

export class LedgersPage extends React.PureComponent {
    static propTypes = {
        loadLedgers: PropTypes.func.isRequired,
        ledgers: PropTypes.object,
    }

    static defaultProps = {
        ledgers: null,
    }

    componentDidMount() {
        this.props.loadLedgers()
    }

    render() {
        return (
            <Container>
                <Ledgers ledgers={this.props.ledgers} />
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    ledgers: selectLedgers(state),
})

const mapDispatchToProps = {
    loadLedgers,
}

const withState = compose(
    connect(mapStateToProps, mapDispatchToProps),
    injectReducer({ key: 'ledgers', reducer: ledgersReducer }),
    injectSaga({ key: 'ledgers', saga: ledgersSaga }),
)

export default withState(LedgersPage)
