import PropTypes from 'prop-types'
import React from 'react'

import LoadingSplash from 'components/LoadingSplash'

import {
    LadderContainer,
    LadderCard,
    LadderCardHeader,
    LadderImg,
    LadderText,
    LadderAmmount,
} from './Ladder.styles'

const getLadder = (ladderItem, index) => {
    const user = ladderItem.get('user')
    if (!user) return null
    const userName = user.get('name')
    const ammountRaw = ladderItem.get('amount')
    const ammountRawWithTax = ammountRaw * 1.13
    let amount = parseFloat(ammountRawWithTax, 10)

    let text = ''
    if (amount === 0) {
        text = `${userName} is square`
    } else if (amount < 0) {
        text = `${userName} is keeping the boat afloat`
    } else if (amount > 0) {
        text = `${userName} owes`
    }

    if (amount < 0) {
        amount *= -1
    }
    amount = amount.toFixed(2)

    return (
        <LadderCard key={index}>
            <LadderCardHeader>
                <LadderImg src={user.get('picture')} />
                <LadderText>{text}</LadderText>
                <LadderAmmount>
                    {amount === 0 ? `$$$` : `$${amount}`}
                </LadderAmmount>
            </LadderCardHeader>
        </LadderCard>
    )
}

const Ladder = ({ ladder }) => {
    if (!ladder) return <LoadingSplash />
    return (
        <LadderContainer>
            {ladder.map((ladderItem, index) => getLadder(ladderItem, index))}
        </LadderContainer>
    )
}

Ladder.propTypes = {
    ladder: PropTypes.object,
}

Ladder.defaultProps = {
    ladder: null,
}

export default Ladder
