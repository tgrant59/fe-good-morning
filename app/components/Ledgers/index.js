import PropTypes from 'prop-types'
import React from 'react'

import LoadingSplash from 'components/LoadingSplash'

import {
    LedgersContainer,
    LedgerCard,
    LedgerCardHeader,
    LedgerImg,
    LedgerText,
    LedgerAmmount,
} from './Ledgers.styles'

const getLedger = (ledger, index) => {
    const user = ledger.get('user')
    const userName = user.get('name')
    let ammount = parseFloat(ledger.get('iOweUserId'), 10)
    let owesMe = false
    if (ammount < 0) {
        owesMe = true
        ammount *= -1
        ammount = ammount.toFixed(2)
    }

    return (
        <LedgerCard key={index}>
            <LedgerCardHeader>
                <LedgerImg src={user.get('picture')} />
                <LedgerText>
                    {owesMe ? `${userName} owes you ` : `You owe ${userName} `}
                </LedgerText>
                <LedgerAmmount>{`$${ammount}`}</LedgerAmmount>
            </LedgerCardHeader>
        </LedgerCard>
    )
}

const Ledgers = ({ ledgers }) => {
    if (!ledgers) return <LoadingSplash />
    return (
        <LedgersContainer>
            {ledgers.map((ledgerItem, index) => getLedger(ledgerItem, index))}
        </LedgersContainer>
    )
}

Ledgers.propTypes = {
    ledgers: PropTypes.object,
}

Ledgers.defaultProps = {
    ledgers: null,
}

export default Ledgers
