import React, {Component} from 'react'
import PropTypes from 'prop-types'
import CommentsList from './commentList';
import toggleOpen from '../decorators/toggleOpen'

class Article extends Component {
    static propTypes = { // тут можно определить переменные и реакт будет их проверять
        article: PropTypes.shape({
            id: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            text: PropTypes.string
        }).isRequired
    }

    /*constructor(props) {
        super(props)

        this.state = {
            isOpen: props.defaultOpen
        }
    }*/

    render() {
        const {article, isOpen, toggleOpen} = this.props // дистрактулизация
        return (
            <div ref = {this.setContainerRef}>
                <h3>{article.title}</h3>
                <button onClick = {toggleOpen}>
                    {isOpen ? 'Close' : 'Open'}
                </button>
                {this.getBody()}
            </div>
        )
    }

    setContainerRef = ref => {
        this.container = ref
        console.log("---", ref)
    }

    getBody() {
        const {article, isOpen} = this.props
        if (!isOpen) return null
        return (
            <section>
                {article.text}
                <CommentsList comments = {article.comments}/>
            </section>
        )
    }
}

export default Article
/*
export default function Article(props) {
    const {article} = props // диструлизация
    console.log("--- ", article);
    return (
        <div>
            <h3>{article.title}</h3>
            <section>{article.text}</section>
        </div>
    )
}
*/

