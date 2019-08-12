import {normalizedArticles as defaultArticles} from '../fixtures'
import {arrToMap} from '../helpers'
import {DELETE_ARTICLE, ADD_COMMENT, LOAD_ALL_ARTICLES} from '../constant'


export default (articleState = {}, action) => {
    const {type, payload, response, randomId} = action
    switch (type) {
        //case DELETE_ARTICLE: return articleState.filter(article => article.id !== payload.id)
        case DELETE_ARTICLE: 
            const tmpState = {...articleState}
            delete tmpState[payload.id]
            return tmpState

        case ADD_COMMENT:
            const article = articleState[payload.articleId] // создаем новый объект
            console.log(articleState)
            console.log("--")
            return {
                ...articleState,
                [payload.articleId]: { // новую копию статьи
                    ...article,
                    comments: (article.comments || []).concat(randomId) // новую копию комментария, в которую мы добавляем новый айдишник
                }
            }
        
        case LOAD_ALL_ARTICLES:
            return arrToMap(response)
    }

    return articleState
}