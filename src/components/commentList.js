import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Comment from './comment'
import toggleOpen from '../decorators/toggleOpen'
import CommentForm from './CommentForm/commentListForm'
import { connect } from 'react-redux'
import {loadArticleComments} from '../AC'
import Loader from './Loader'

// export default class CommentsList extends Component {  (тогда убираем экспорт внизу)
class CommentList extends Component {
    static contextTypes = {
        store: PropTypes.object,
        router: PropTypes.object,
        user: PropTypes.string
    }

    componentWillReceiveProps({isOpen, article, loadArticleComments}) {
        if(!this.props.isOpen && isOpen && !article.commentsLoading && !article.commentsLoaded) {
            loadArticleComments(article.id)
        }
    }

    render() {
        const {isOpen, article, toggleOpen} = this.props
        console.log("---", this.context)
        const text = isOpen ? 'Hide comments' : 'Show comments'
        return (
            <div>
                <h3>user: {this.context.user}</h3>
                <button onClick={toggleOpen} >{text}</button>
                {getCommentBody({article, isOpen})}
            </div>
        )
    }
}

    CommentList.PropTypes = {
        comments: PropTypes.array,
        // from toggleOpen
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func
    }

    
    function getCommentBody({article: {comments = [], id, commentsLoaded, commentsLoading}, isOpen}) {
        if (!isOpen) return null
        if (commentsLoading) return <Loader />
        if (!commentsLoaded) return null
        if (!comments.length) return (
            <div>
                <p>No comments yet</p>
                <CommentForm articleId = {id} />
            </div>
        )
        return (
            <div>
                <ul>
                    {comments.map(id => <li key = {id}><Comment id = {id}/></li>)}
                </ul>
                <CommentForm articleId = {id} />
            </div>
        )
    }

export default connect(null, {loadArticleComments}, null, {pure: false})(toggleOpen(CommentList))