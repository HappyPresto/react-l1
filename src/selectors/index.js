import {createSelector} from 'reselect'
import { create } from 'domain';

const filterGetter = state => state.filters
const articlesGetter = state => state.articles
const commentsGetter = state => state.comments
const idGetter = (state, props) => props.id

export const filtratedArticlesSelector = createSelector(articlesGetter, filterGetter, (articles, filters) =>{
    const {selected, dateRange: {from, to}} = filters

    return articles.filter(article => {
        const published = Date.parse(article.date)
        return (!selected.length || selected.includes(article.id)) &&
            (!from || !to || (published > from && published < to))
    })
})

export const commentSelectorfactory = () => createSelector(commentsGetter, idGetter, (comments, id) => {
    return comments[id]
})