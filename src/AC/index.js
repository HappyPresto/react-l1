import {DELETE_ARTICLE, INCREMENT, CHANGE_DATE_RANGE, CHANGE_SELECTION, ADD_COMMENT, 
    LOAD_ALL_ARTICLES, LOAD_ARTICLE, LOAD_ALL_COMMENTS, START, SUCCESS, FAIL, 
    LOAD_ARTICLE_COMMENTS, LOAD_COMMENTS_FOR_PAGE} from '../constant'
import article from '../components/Article/article';

export function increment() {
    return {
        type: INCREMENT
    }
}

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        payload: {id}
    }
}

export function changeDateRange(dateRange) {
    return {
        type: CHANGE_DATE_RANGE,
        payload: {dateRange}
    }
}

export function changeSelection(selected) {
    return {
        type: CHANGE_SELECTION,
        payload: {selected}
    }
}

export function addComment(comment, articleId) {
    return {
        type: ADD_COMMENT,
        payload: {comment, articleId},
        generateId: true
    }
}

export function loadAllArticles() {
    return {
        type: LOAD_ALL_ARTICLES,
        callAPI: '/api/article'
    }
}

export function loadArticle(id) {
    return (dispatch) => {
        dispatch({
            type: LOAD_ARTICLE + START,
            payload: {id}
        })

        fetch(`/api/article/${id}`)
            .then(res => res.json())
            .then(response => dispatch({
                type: LOAD_ARTICLE + SUCCESS,
                payload: {id, response}
            }))
            .catch(error => dispatch({
                type: LOAD_ARTICLE + FAIL,
                payload: {id, error}
            }))
    }
}

export function loadArticleComments(articleId) {
    return {
        type: LOAD_ARTICLE_COMMENTS,
        payload: {articleId},
        callAPI: `/api/comment?article=${articleId}`
    }
}

export function loadAllComments(commentId) {
    return (dispatch) => {
        dispatch({
            type: LOAD_ALL_COMMENTS + START,
            payload: {commentId}
        })

        fetch(`/api/comment/`)
            .then(res => res.json())
            .then(response => dispatch({
                type: LOAD_ALL_COMMENTS + SUCCESS,
                payload: {commentId, response}
            }))
            .catch(error => dispatch({
                type: LOAD_ALL_COMMENTS + FAIL,
                payload: {commentId, error}
            }))
    }
}
/*
export function loadArticle(id) {
    return {
        type: LOAD_ARTICLE,
        callAPI: '/api/article/${id}'
    }
}
*/
export function checkAndLoadCommentsForPage(page) {
    return (dispatch, getState) => {
        const {comments: {pagination}} = getState()
        if (pagination.getIn([page, 'loading']) || pagination.getIn([page, 'ids'])) return null

        dispatch({
            type: LOAD_COMMENTS_FOR_PAGE,
            payload: {page}, 
            callAPI: `/api/comment?limit=5&offset=${(page - 1) * 5}`
        })
    }
}