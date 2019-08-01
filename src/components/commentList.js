import React, { Component } from 'react'
import propTypes from 'prop-types'
import Comment from './comment'
import toggleOpen from '../decorators/toggleOpen'

// export default class CommentsList extends Component {  (тогда убираем экспорт внизу)
function CommentList({comments = [], isOpen, toggleOpen}) {
    const text = isOpen ? 'Hide comments' : 'Show comments'
    return (
        <div>
            <button onClick={toggleOpen} >{text}</button>
            {getCommentBody({comments, isOpen})}
        </div>
    )
}

CommentList.propTypes = {
    comments: propTypes.array,
    // from toggleOpen
    isOpen: propTypes.bool,
    toggleOpen: propTypes.func
}

function getCommentBody({comments, isOpen}) {
    if (!isOpen) return null
    if (!comments.length) return <p>No comments yet</p>

    return (
        <ul>
            {comments.map(comment => <li key = {comment.id}><Comment comment = {comment}/></li>)}
        </ul>
    )
}

export default toggleOpen(CommentList)