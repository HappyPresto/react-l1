import {createStore} from 'redux'
import reducer from '../reducer'

const store = createStore(reducer) // вызываем один раз при инициализации приложения

//dev only
window.store = store

export default store