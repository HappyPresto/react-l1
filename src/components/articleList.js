import React, {Component} from 'react'
import Article from './article'
import PropTypes from 'prop-types'
import toggleOpenItem from '../decorators/accordion'

class ArticleList extends Component {
    static propTypes = {
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

export default toggleOpenItem(ArticleList)