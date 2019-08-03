import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ArticleList from './articleList'
import ArticleChart from './articlesChart'
import UserForm from './userForm'
import Select from 'react-select'
import 'react-select/dist/react-select.css'
import Counter from './Counter'
import {connect} from 'react-redux'

class App extends Component {
    static propTypes = {

    }

    state = {
        selection: null
    }

    render() {
        return (
            <div>
                <Counter />
                <UserForm />
                <ArticleList />
                <ArticleChart articles = {this.props.articles}/>
            </div>
        )
    }

    changeSelection = selection => this.setState({selection})
}

export default App