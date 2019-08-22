import {normalizedComments as defaultComments} from '../fixtures'
import {ADD_COMMENT, START, SUCCESS, LOAD_ARTICLE_COMMENTS, LOAD_COMMENTS_FOR_PAGE} from '../constant'
import {arrToMap} from "../helpers";
import {OrderedMap, Map, Record} from 'immutable'

const CommentRecord = Record({
    id: null,
    text: null,
    user: null
})

const ReducerState = Record({
    commentsEntities: new OrderedMap({}),
    pagination: new Map({}),
    total: null
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

        case LOAD_COMMENTS_FOR_PAGE + START:
            return commentsState.setIn(['pagination', payload.page, 'loading'], true)

        case LOAD_COMMENTS_FOR_PAGE + SUCCESS:
            return commentsState
                .set('total', response.total)
                .mergeIn(['commentsEntities'], arrToMap(response.records, CommentRecord)) // добавляет свежезагруженные комментарии
                .setIn(['pagination', payload.page, 'ids'], response.records.map(comment => comment.id)) // сохраним массив айдишников для этой страницы
                .setIn(['pagination', payload.page, 'loading'], false)
    }

    return commentsState
}