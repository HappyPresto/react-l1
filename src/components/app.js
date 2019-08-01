import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ArticleList from './articleList'
import ArticleChart from './articlesChart'
import UserForm from './userForm'

class App extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <UserForm />
                <ArticleList articles = {this.props.articles}/>
                <ArticleChart articles = {this.props.articles}/>
            </div>
        )
    }
}

export default App