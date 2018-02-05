import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import styled from 'styled-components'

import Ladder from 'components/Ladder'
import { loadLadder } from 'ducks/Ladder/Ladder.actions'
import ladderReducer from 'ducks/Ladder/Ladder.reducer'
import ladderSaga from 'ducks/Ladder/Ladder.saga'
import { selectLadder } from 'ducks/Ladder/Ladder.selectors'
import injectReducer from 'utils/injectReducer'
import injectSaga from 'utils/injectSaga'

const Container = styled.div`
    height: 100%;
    padding: 20px;
    width: 100%;
`

export class LadderPage extends React.PureComponent {
    static propTypes = {
        loadLadder: PropTypes.func.isRequired,
        ladder: PropTypes.object,
    }

    static defaultProps = {
        ladder: null,
    }

    componentDidMount() {
        this.props.loadLadder()
    }

    render() {
        return (
            <Container>
                <Ladder ladder={this.props.ladder} />
            </Container>
        )
    }
}

const mapStateToProps = state => ({
    ladder: selectLadder(state),
})

const mapDispatchToProps = {
    loadLadder,
}

const withState = compose(
    connect(mapStateToProps, mapDispatchToProps),
    injectReducer({ key: 'ladder', reducer: ladderReducer }),
    injectSaga({ key: 'ladder', saga: ladderSaga }),
)

export default withState(LadderPage)
