import React, {Component, PureComponent} from 'react'
import PropTypes from 'prop-types'
import CommentsList from '../commentList';
import toggleOpen from '../../decorators/toggleOpen'
import {connect} from 'react-redux'
import {deleteArticle, loadArticle} from '../../AC'
import Loader from '../Loader'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       

class Article extends Component {
    static propTypes = { // тут можно определить переменные и реакт будет их проверять
        id: PropTypes.string.isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func,
        // from
        article: PropTypes.shape({
            id: PropTypes.string,
            title: PropTypes.string,
            text: PropTypes.string
        })
    }

    state = {
        updateIndex: 0
    }

    componentDidMount() {
        const {loadArticle, article, id} = this.props
        if (!article || !article.text && !article.loading) loadArticle(id)
    }
    /*constructor(props) {
        super(props)

        this.state = {
            isOpen: props.defaultOpen
        }
    }*/

/*  
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.isOpen !== this.props.isOpen
    }
*/
    render() {
        const {article, isOpen, toggleOpen} = this.props // дистрактулизация
        if (!article) return null
        return (
            <div ref = {this.setContainerRef}>
                <h3>{article.title}</h3>
                <button onClick = {toggleOpen}>
                    {isOpen ? 'Close' : 'Open'}
                </button>
                <button onClick = {this.handleDelete}>delete me</button>
                    {this.getBody()}
            </div>
        )
    }

    handleDelete = () => {
        const {deleteArticle, article} = this.props
        deleteArticle(article.id)
        console.log("---", 'deleting Article')
    }

    setContainerRef = ref => {
        this.container = ref
//        console.log("---", ref)
    }

    getBody() {
        const {article, isOpen} = this.props
        if (!isOpen) return null
        if (article.loading) return <Loader/>
        return (
            <section>
                {article.text}
                <button onClick = {() => this.setState({updateIndex: this.state.updateIndex + 1})}>Update</button>
                <CommentsList article = {article} ref = {this.setContainerRef} key = {this.state.updateIndex}/>
            </section>
        )
    }
}

export default connect((state, ownProps) => ({
    article: state.articles.entities.get(ownProps.id)
}), 
    {deleteArticle, loadArticle},
    null,    // mergeProps - как с мерджить свойства, которые передаем (обычно редко используют)
    {pure: false} // option pure:false - отключает shouldComponentUpdate в connect"е
    )(Article)
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

