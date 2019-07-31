import React from 'react'
import {render} from 'react-dom'
import App from './components/app'
import {articles} from './fixtures'

function HelloWorld() {
    return <h1>Hello World</h1>
}

render(<App articles = {articles} />, document.getElementById('container'))
// {} - для передачи js