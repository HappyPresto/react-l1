import React, { Component } from 'react'
import propTypes from 'prop-types'
import Comment from './comment'
import toggleOpen from '../decorators/toggleOpen'
import CommentForm from './CommentForm/commentListForm'
import { connect } from 'react-redux'
import {loadAllComments} from '../AC'
import Loader from './Loader'

// export default class CommentsList extends Component {  (тогда убираем экспорт внизу)
class CommentList extends Component {
    /*static contextTypes = {
        store: PropTypes.object,
        router: PropTypes.object,
        user: PropTypes.string
    }*/

    componentWillReceiveProps({isOpen, loadAllComments, article}) {
            loadAllComments(article.id)
    }

    render() {
        const {isOpen, article} = this.props
        const text = isOpen ? 'Hide comments' : 'Show comments'
        console.log(article)
        if (article) return <Loader/>
        return (
            <div>
                <button onClick={toggleOpen} >{text}</button>
                {getCommentBody({article, isOpen})}
            </div>
        )
    }
}

    CommentList.propTypes = {
        comments: propTypes.array,
        // from toggleOpen
        isOpen: propTypes.bool,
        toggleOpen: propTypes.func
    }

    function getCommentBody({article: {comments = [], id}, isOpen}) {
        if (!isOpen) return null
        if (!comments.length) return 
            <div>
                <p>No comments yet</p>
                <CommentForm articleId = {id} />
            </div>

        return (
            <div>
                <ul>
                    {comments.map(id => <li key = {id}><Comment id = {id}/></li>)}
                </ul>
                <CommentForm articleId = {id} />
            </div>
        )
    }

export default connect(null, {loadAllComments})(toggleOpen(CommentList))