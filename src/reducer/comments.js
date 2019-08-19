import {normalizedComments as defaultComments} from '../fixtures'
import {ADD_COMMENT, SUCCESS, LOAD_ARTICLE_COMMENTS} from '../constant'
import {arrToMap} from "../helpers";
import {OrderedMap, Record} from 'immutable'

const CommentRecord = Record({
    id: null,
    text: null,
    user: null
})

const ReducerState = Record({
    commentsEntities: new OrderedMap({})
})

const commentsMap = new ReducerState()

export default (commentsState = commentsMap, action) => {
    const {type, payload, response, randomId} = action
    switch (type) {
        case ADD_COMMENT:
            //return {...commentsState, [randomId]: payload.comment}
            return commentsState.setIn(['commentsEntities'], randomId), new CommentRecord({...payload.comment, id: randomId})

        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            return commentsState.update('commentsEntities', entities => entities.merge(arrToMap(response, CommentRecord)))
    }

    return commentsState
}