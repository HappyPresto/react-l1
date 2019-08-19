import {createSelector} from 'reselect'
import { create } from 'domain'
import {mapToArr} from '../helpers'

const filterGetter = state => state.filters
const articlesGetter = state => state.articles.entities
const commentsGetter = state => state.comments.commentsEntities
const idGetter = (state, props) => props.id

export const filtratedArticlesSelector = createSelector(articlesGetter, filterGetter, (articles, filters) =>{
    const {selected, dateRange: {from, to}} = filters

    return mapToArr(articles).filter(article => {
        const published = Date.parse(article.date)
        return (!selected.length || selected.includes(article.id)) &&
            (!from || !to || (published > from && published < to))
    })
})

export const commentSelectorfactory = () => createSelector(commentsGetter, idGetter, (comments, id) => {
    return comments.get(id)
})