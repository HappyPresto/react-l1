import React, {Component} from 'react'
import Article from './Article/article'
import PropTypes from 'prop-types'
import toggleOpenItem from '../decorators/accordion'
import {connect} from 'react-redux'

class ArticleList extends Component {
    static propTypes = {
        // from connect
        articles: PropTypes.array.isRequired,
        // from accordion
        openItemId: PropTypes.string,
        toggleOpenItem: PropTypes.func.isRequired
    }
    state = {
        openArticleId: null
    }

    render() {
        const {articles, openItemId, toggleOpenItem} = this.props
        const articleElements = articles.map((article) => <li key = {article.id}>
            <Article 
                article = {article}
                isOpen = {article.id === openItemId}
                toggleOpen = {toggleOpenItem(article.id)}
            />
        </li>)

        return (
            <ul>
                {articleElements}
            </ul>
        )
    }

    toggleOpenArticle(openArticleId) {
        this.setState({openArticleId}) 
    }
}

export default connect(({filters, articles}) => {
    const {selected, dateRange: {from, to}} = filters

    const filteredArticles = articles.filter(article => {
        const published = Date.parse(article.date)
        return (!selected.length || selected.includes(article.id)) &&
            (!from || !to || (published > frm && published < to))
    })
    
    return {
        articles: filteredArticles
    }
})(toggleOpenItem(ArticleList))