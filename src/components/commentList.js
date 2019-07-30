import React, { Component } from 'react'
import Comment from './comment'
import toggleOpen from '../decorators/toggleOpen'

// export default class CommentsList extends Component {  (тогда убираем экспорт внизу)
class CommentList extends Component {
    static defaultProps = {
        comments: []
    }

    render() {
        const text = this.props.isOpen ? 'Hide comments' : 'Show comments'
        return (
            <div>
                <button onClick = {toggleOpen}>{text}</button>
                {this.getCommentBody()}
            </div>
        )
    }

    getCommentBody() {
        const {comments, isOpen} = this.props
        if (!isOpen) return null
        if (!comments.length) return <p>No comments yet</p>

        return (
            <ul>
                {comments.map(comment => <li key = {comment.id}><Comment comment = {comment}/></li>)}
            </ul>
        )
    }
}

export default toggleOpen(CommentList)