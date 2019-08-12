export default store => next => action => { // каррированная функция 3 аргументов
    if (!action.generateId) return next(action)
    next({
        ...action, 
        randomId: (Date.now() + Math.random()).toString()
    })
}
