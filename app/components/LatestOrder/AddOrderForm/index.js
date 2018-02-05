import PropTypes from 'prop-types'
import React from 'react'

import {
    AddCard,
    AddOptionHeader,
    AddOptionSection,
    AddOptionSections,
    AddButton,
} from './AddOrderForm.styles'

class AddOrderForm extends React.Component {
    static propTypes = {
        addOrder: PropTypes.func,
        hasOrdered: PropTypes.bool,
        isOrdering: PropTypes.bool,
        items: PropTypes.object,
    }

    static defaultProps = {
        isOrdering: false,
        hasOrdered: false,
    }

    state = {
        selectedItem: null,
        selectedItemIndex: null,
        selectedOptions: {},
    }

    componentWillReceiveProps(nextProps) {
        if (
            this.props.items &&
            (!this.state.selectedItem || this.props.items !== nextProps.items)
        ) {
            this.setState({
                selectedItem: nextProps.items.get(0),
                selectedItemIndex: 0,
                selectedOptions: this.getDefaultSelectedOptions(
                    nextProps.items.get(0),
                ),
            })
        }
    }

    onItemSelect = event => {
        const selectedItemIndex = event.target.value
        const selectedItem = this.props.items.get(selectedItemIndex)
        this.setState({
            selectedItem,
            selectedItemIndex,
            selectedOptions: this.getDefaultSelectedOptions(selectedItem),
        })
    }

    onSingleOptionSelect = (optionType, event) => {
        const selectedOptions = this.state.selectedOptions
        selectedOptions[optionType] = event.target.value
        this.setState({ selectedOptions })
    }

    onMultiOptionSelect = (optionType, event) => {
        let optionValues = this.state.selectedOptions[optionType]
        if (!optionValues) {
            optionValues = new Set()
            optionValues.add(event.target.value)
        } else if (optionValues.has(event.target.value)) {
            optionValues.delete(event.target.value)
        } else {
            optionValues.add(event.target.value)
        }
        const selectedOptions = this.state.selectedOptions
        selectedOptions[optionType] = optionValues
        this.setState({ selectedOptions })
    }

    onSubmit = event => {
        this.props.addOrder(this.state)
        event.preventDefault()
    }

    getDefaultSelectedOptions(selectedItem) {
        if (!selectedItem) return {}
        const selectedOptions = {}
        selectedItem.get('options').forEach(option => {
            if (!option.get('allowMultiple')) {
                selectedOptions[option.get('name')] = option.getIn([
                    'options',
                    0,
                ])
            }
        })
        return selectedOptions
    }

    getOptionMultiOptions = option => {
        const onSubOptionChange = event => {
            this.onMultiOptionSelect(option.get('name'), event)
        }
        return (
            <div>
                {option.get('options').map(subOption => (
                    <label htmlFor={subOption} key={subOption}>
                        <input
                            name={subOption}
                            checked={
                                !!(
                                    this.state.selectedOptions[
                                        option.get('name')
                                    ] &&
                                    this.state.selectedOptions[
                                        option.get('name')
                                    ].has(subOption)
                                )
                            }
                            type="checkbox"
                            value={subOption}
                            onChange={onSubOptionChange}
                        />
                        <span> </span>
                        {subOption}
                        <br />
                    </label>
                ))}
            </div>
        )
    }

    getOptionSingleOption = option => {
        const onSubOptionChange = event => {
            this.onSingleOptionSelect(option.get('name'), event)
        }
        return (
            <div>
                {option.get('options').map(subOption => (
                    <label htmlFor={subOption} key={subOption}>
                        <input
                            name={subOption}
                            checked={
                                this.state.selectedOptions[
                                    option.get('name')
                                ] === subOption
                            }
                            type="radio"
                            value={subOption}
                            onChange={onSubOptionChange}
                        />
                        <span> </span>
                        {subOption}
                        <br />
                    </label>
                ))}
            </div>
        )
    }

    getOption = option => (
        <AddOptionSection key={option.get('name')}>
            <AddOptionHeader>{option.get('name')}</AddOptionHeader>
            {option.get('allowMultiple')
                ? this.getOptionMultiOptions(option)
                : this.getOptionSingleOption(option)}
        </AddOptionSection>
    )

    getItemSelectOption = (item, index) => (
        <option key={index} value={index}>
            {item.get('name')}
        </option>
    )

    render() {
        if (this.state.selectedItemIndex === null) return null
        if (this.props.isOrdering)
            return (
                <AddCard>
                    <h2>Ordering...</h2>
                </AddCard>
            )
        if (this.props.hasOrdered)
            return (
                <AddCard>
                    <h2>Your Order has been submitted!</h2>
                </AddCard>
            )
        return (
            <AddCard>
                <h2>Create your Order</h2>
                <form onSubmit={this.onSubmit}>
                    <h3>Sandwich Type</h3>
                    <select
                        onChange={this.onItemSelect}
                        value={this.state.selectedItemIndex}
                    >
                        {this.props.items.map(this.getItemSelectOption)}
                    </select>
                    <AddOptionSections>
                        {this.state.selectedItem
                            ? this.state.selectedItem
                                  .get('options')
                                  .map(this.getOption)
                            : null}
                    </AddOptionSections>
                    <AddButton type="submit">Place Order</AddButton>
                </form>
            </AddCard>
        )
    }
}

export default AddOrderForm
