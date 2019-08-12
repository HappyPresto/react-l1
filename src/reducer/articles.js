import {normalizedArticles as defaultArticles} from '../fixtures'
import {arrToMap} from '../helpers'
import {DELETE_ARTICLE, ADD_COMMENT} from '../constant'


export default (articleState = arrToMap(defaultArticles), action) => {
    const {type, payload, randomId} = action
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
    }

    return articleState
}