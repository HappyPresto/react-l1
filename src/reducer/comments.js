import {normalizedComments as defaultComments} from '../fixtures'
import {ADD_COMMENT, START, SUCCESS, FAIL, LOAD_ALL_COMMENTS} from '../constant'
import {arrToMap} from "../helpers";
import {OrderedMap, Record} from 'immutable'

const CommentRecord = Record({
    id: null,
    text: null,
    user: null,
    comments: []
})

const ReducerState = Record({
    loading: false,
    loaded: false,
    commentsEntities: new OrderedMap({})
})

const commentsMap = new ReducerState()

export default (commentsState = commentsMap, action) => {
    const {type, payload, randomId} = action
    console.log(action)
    console.log("-- HELLO --")
    switch (type) {
        case ADD_COMMENT:
            return {...commentsState, [randomId]: payload.comment}

        case LOAD_ALL_COMMENTS + START:
            return commentsState.set('loading', true)

        case LOAD_ALL_COMMENTS + SUCCESS:
            const response = payload.response
            const comments = payload.commentId
            let visibleComments = []
            comments.map((elem) => {
                response.records.map((comment) => {
                    if (comment.id == elem) {visibleComments[visibleComments.length] = comment}
                })
            })
            console.log(visibleComments)
            return commentsState
                .set('commentsEntities', arrToMap(response, CommentRecord))
                .set('loading', false)
                .set('loaded', true)

        case LOAD_ALL_COMMENTS + FAIL:
            return commentsState.set('loadind', true)
    }

    return commentsState
}