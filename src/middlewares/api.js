export default store => next => action => { // каррированная функция 3 аргументов
    const {callAPI} = action
    console.log(callAPI)
    if (!callAPI) return next(action)
    
    // нативный браузерый api - fetch
    fetch(callAPI)
        .then(res => res.json())
        .then(response => next({...action, response}))
}
