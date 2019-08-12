import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer'
import randomId from '../middlewares/randomId'
import logger from '../middlewares/logger'
import api from '../middlewares/api'

const enhancer = applyMiddleware(randomId, api, logger)

const store = createStore(reducer, {}, enhancer) // вызываем один раз при инициализации приложения

//dev only
window.store = store

export default store