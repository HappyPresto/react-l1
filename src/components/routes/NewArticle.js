import React, {Component} from "react"
import PropTypes from 'prop-types'
import ArticleList from '../articleList'
import Article from '../Article/article'
import {Route} from 'react-router-dom'

class NewArticle extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <h1>New Article Form</h1>
            </div>
        )
    }
}

export default NewArticle