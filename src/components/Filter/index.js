import React, {Component} from 'react'
import PropTypes from 'prop-types'
import DateRange from './dateRange'
import SelectFilter from './Select'

class Filters extends Component {
    static propTypes = {
        //articles: this.propTypes.array
    }

    render() {
        return (
            <div>
                <SelectFilter />
                <DateRange />
            </div>
        )
    }
}

export default Filters

/*
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import DayPicker, {DateUtils} from 'react-day-picker'
import './react-day-picker.css'
import 'react-day-picker/lib/style.css'

class Filter extends Component {
    static propTypes = {

    }

    static defaultProps = {
        numberOfMonths: 2
    }

    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this)
        this.handleResetClick = this.handleResetClick.bind(this)
        this.state = this.getInitialState()
    }

    render() {
        const { from, to } = this.state;
        const modifiers = { start: from, end: to };
        return (
            <div>
                <div className="RangeExample">
                    <p>
                        {!from && !to && 'Please select the first day.'}
                        {from && !to && 'Please select the last day.'}
                        {from &&
                            to &&
                            `Selected from ${from.toLocaleDateString()} to
                                ${to.toLocaleDateString()}`}{' '}
                        {from &&
                            to && (
                            <button className="link" onClick={this.handleResetClick}>
                                Reset
                            </button>
                            )}
                    </p>
                </div>
                <DayPicker
                    className="Selectable"
                    numberOfMonths={this.props.numberOfMonths}
                    selectedDays={[from, { from, to }]}
                    modifiers={modifiers}
                    onDayClick={this.handleDayClick}
                />
            </div>
        )
    }
    
    getInitialState() {
        return {
          from: undefined,
          to: undefined,
        };
    }
    handleDayClick(day) {
        const range = DateUtils.addDayToRange(day, this.state);
        this.setState(range);
    }
    handleResetClick() {
        this.setState(this.getInitialState());
    }
}

export default Filter
*/