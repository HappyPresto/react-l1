import {normalizedComments as defaultComments} from '../fixtures'
import {ADD_COMMENT, START, SUCCESS, FAIL, LOAD_ALL_COMMENTS} from '../constant'
import {arrToMap} from "../helpers"
import {OrderedMap, Record} from 'immutable'


const ArticleRecord = Record({
    /*id: undefined,
    user: undefined,
    text: undefined,
    loading: false,*/
    comments: []
})

const ReducerState = Record({
    loading: false,
    loaded: false,
    commentArray: new OrderedMap({})
})

const defaultComments = new ReducerState()

const commentsMap = arrToMap(defaultComments)

export default (commentsState = commentsMap, action) => {
    const {type, payload, randomId} = action
    switch (type) {   
        case ADD_COMMENT:
            return {...commentsState, [randomId]: payload.comment}

        case LOAD_ALL_COMMENTS + SUCCESS:
            return commentsState
    }

    return commentsState
}