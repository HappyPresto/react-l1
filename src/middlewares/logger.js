export default store => next => action => { // каррированная функция 3 аргументов
    console.log("---", "state before: ", store.getState())
    console.log("---", "dispatching", action)
    next(action)
    console.log("---", "state after: ", store.getState())
}