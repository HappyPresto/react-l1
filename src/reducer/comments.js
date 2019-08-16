import {normalizedComments as defaultComments} from '../fixtures'
import {ADD_COMMENT, START, SUCCESS, FAIL, LOAD_ALL_COMMENTS} from '../constant'
import {arrToMap} from "../helpers";
import {OrderedMap, Record} from 'immutable'

const CommentRecord = Record({
    id: null,
    text: null,
    user: null
})

const ReducerState = Record({
    loading: false,
    loaded: false,
    commentsEntities: new OrderedMap({})
})

const commentsMap = new ReducerState()

export default (commentsState = commentsMap, action) => {
    const {type, payload, response, randomId} = action
    console.log(action)
    console.log("-- HELLO --")
    switch (type) {
        case ADD_COMMENT:
            return {...commentsState, [randomId]: payload.comment}
        case LOAD_ALL_COMMENTS + START:
            return commentsState.set('loadind', true)

        case LOAD_ALL_COMMENTS + SUCCESS:
            return commentsState
                .set('commentsEntities', arrToMap(response, CommentRecord))
                .set('loading', false)
                .set('loaded', true)

        case LOAD_ALL_COMMENTS + FAIL:
            return commentsState.set('loadind', true)
    }

    return commentsState
}