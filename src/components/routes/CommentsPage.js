import React from 'react'
import PropTypes from 'prop-types'
import CommentsPagination from '../commentsPagination'

function CommentsPage({match}) {
    const {page} = match.params
    return <CommentsPagination page = {page} />
}

CommentsPage.propTypes = {
    
}

export default CommentsPage