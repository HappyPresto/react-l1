import React from 'react'
import {render} from 'react-dom'
import ArticleList from './articleList'
import {articles} from './fixtures'

function HelloWorld() {
    return <h1>Hello World</h1>
}

render(<ArticleList articles = {articles} />, document.getElementById('container'))
// {} - для передачи js