import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import Comment from './comment'
import Loader from './Loader'
import {checkAndLoadCommentsForPage} from '../AC'

class CommentsPagination extends Component {
    componentWillMount() {
        this.props.checkAndLoadCommentsForPage(this.props.page)
    }

    componentWillReceiveProps({page, checkAndLoadCommentsForPage}) {
        checkAndLoadCommentsForPage(page)
    }

    render() {
        const {total} = this.props
        if (!total) return <Loader />
        return (
            <div>
                {this.getCommentItems()}
                {this.getPaginator()}
            </div>
        )
    }

    getCommentItems() {
        const {comments, loading} = this.props
        if (loading || !comments) return <Loader />
        const commentsItems = comments.map(id => <li key={id}><Comment id={id} /></li>)
        return <ul>{commentsItems}</ul>
    }

    getPaginator() {
        const total = this.props
        const items = []
        for (let i = 1; i <= Math.floor((total - 1) / 5) + 1; i++) {
            items.push(<li key={i}>
                <NavLink 
                    to={`/comments/${id}`} 
                    activeStyle={{color: 'red'}}>{i}
                </NavLink>
            </li>)
        }
        return <ul>{items}</ul>
    }
}

export default connect((state, {page}) => {
    const {total, pagination} = state.comments
    return {
        total,
        loading: pagination.getIn([page, 'loading']),
        comments: pagination.getIn([page, 'ids'])
    }
}, {checkAndLoadCommentsForPage})(CommentsPagination)