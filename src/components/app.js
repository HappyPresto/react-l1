import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ArticleList from './articleList'
import ArticleChart from './articlesChart'
import UserForm from './userForm'
import Select from 'react-select'
import 'react-select/dist/react-select.css'

class App extends Component {
    static propTypes = {

    }

    state = {
        selection: null
    }

    render() {
        const options = this.props.articles.map(article => ({
            label: article.title,
            value: article.id
        }))
        return (
            <div>
                <UserForm />
                <Select options = {options} value = {this.state.selection} onChange = {this.changeSelection}/>
                <ArticleList articles = {this.props.articles}/>
                <ArticleChart articles = {this.props.articles}/>
            </div>
        )
    }

    changeSelection = selection => this.setState({selection})
}

export default App