import React from 'react'
import PropTypes from 'prop-types'
import CommentsPagination from '../commentsPagination'
import {Redirect, Route} from 'react-router-dom'

function CommentsPage({match}) {
    if (match.isExact) return <Redirect to = "/comments/1" />
    /*return <CommentsPagination page = {match.params.page} />*/
    return <Route path = '/comments/:page' render = {getCommentsPagination} />
}

function getCommentsPagination({match}) {
    return <CommentsPagination page = {match.params.page} />
}

CommentsPage.propTypes = {

}

export default CommentsPage