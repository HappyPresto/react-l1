import React, {Component} from "react"
import PropTypes from 'prop-types'
import ArticleList from '../articleList'
import Article from '../Article/article'
import {Route} from 'react-router-dom'

class Articles extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <ArticleList />
                <Route path = "/articles/" render = {this.getIndex} exact />
                <Route path = "/articles/:id" render = {this.getArticle} />
            </div>
        )
    }

    getArticle = ({match}) => {
        const {id} = match.params
        return <Article id = {id} isOpen key={id}/>
    }

    getIndex = () => {
        return <h2>Please select Article</h2>
    }
}

export default Articles