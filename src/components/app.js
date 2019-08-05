import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ArticleList from './articleList'
import ArticleChart from './articlesChart'
import UserForm from './userForm'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import DayPicker, {DateUtils} from 'react-day-picker'
import './react-day-picker.css'
import 'react-day-picker/lib/style.css'
import Counter from './Counter'
import {connect} from 'react-redux'
import article from './Article/article';

class App extends Component {
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

    state = {
        selection: null,
        selectedDay: undefined 
    }

    render() {
        const {articles} = this.props
        const options = articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        const { from, to } = this.state;
        const modifiers = { start: from, end: to };
        return (
            <div>
                <Counter />
                <UserForm />
                <Select options = {options} value = {this.state.selection} onChange = {this.changeSelection} multi = {true} />
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
                <ArticleList />
                <ArticleChart articles = {this.props.articles}/>
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

    changeSelection = selection => this.setState({selection})
}

export default connect(state => ({
    articles: state.articles
}), null)(App)