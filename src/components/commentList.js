import React, { Component } from 'react'
import propTypes from 'prop-types'
import Comment from './comment'
import toggleOpen from '../decorators/toggleOpen'
import CommentForm from './CommentForm/commentListForm'
import { connect } from 'react-redux'
import {loadComments} from '../AC'

// export default class CommentsList extends Component {  (тогда убираем экспорт внизу)
function CommentList({article, isOpen, toggleOpen}) {
    const text = isOpen ? 'Hide comments' : 'Show comments'
    return (
        <div>
            <button onClick={toggleOpen} >{text}</button>
            {getCommentBody({article, isOpen})}
        </div>
    )
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

export default connect(null, {loadComments})(toggleOpen(CommentList))