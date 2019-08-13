import {START, SUCCESS, FAIL} from '../constant'

export default store => next => action => { // каррированная функция 3 аргументов
    const {callAPI, type, ...rest} = action
    if (!callAPI) return next(action)

    next({
        ...rest, type: type + START
    })
    
    // нативный браузерый api - fetch
    fetch(callAPI)
        .then(res => res.json())
        .then(response => next({...rest, type: type + SUCCESS, response}))
        .catch(error => next({...rest, type: type + FAIL, error}))
}
