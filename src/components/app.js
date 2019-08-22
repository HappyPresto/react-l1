import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Articles from './routes/Articles'
import NewArticle from './routes/NewArticle'
import CommentsPage from './routes/CommentsPage'
import NotFound from './routes/NotFound'
import ArticleChart from './articlesChart'
import UserForm from './userForm'
import Filters from './Filter'
import Counter from './Counter'
import {connect} from 'react-redux'
import {Switch, Route, Redirect, NavLink} from 'react-router-dom'
import {ConnectedRouter} from 'react-router-redux'
import history from '../history'

class App extends Component {
    static propTypes = {
        
    }

    state = {
        selection: null,
        selectedDay: undefined 
    }

    render() {
        //const {articles} = this.props
        return (
            <ConnectedRouter history = {history}>
                <div>
                    <div>
                        <h2>Main menu</h2>
                        <div><NavLink activeStyle = {{color:'red'}} to="/counter">Counter</NavLink></div>
                        <div><NavLink activeStyle = {{color:'red'}} to="/filters">Filters</NavLink></div>
                        <div><NavLink activeStyle = {{color:'red'}} to="/articles">Articles</NavLink></div>
                        <div><NavLink activeStyle = {{color:'red'}} to="/articles/new">NewArticles</NavLink></div>
                        <div><NavLink activeStyle = {{color:'red'}} to="/comments">CommentsPage</NavLink></div>
                    </div>
                    <UserForm />    
                    <Switch>
                        <Route path = "/counter" component = {Counter} />
                        <Route path = "/filters" component = {Filters} />
                        <Route path = "/articles/new" component = {NewArticle} />
                        <Route path = "/articles" component = {Articles} />
                        <Route path = "/comments" component = {CommentsPage} />
                        {/*<Redirect from = "/comments/" to = "/comments/1"/>*/}
                        <Route path = "*" component = {NotFound} />
                    </Switch>
                </div>
            </ConnectedRouter>
        )
    }

    changeSelection = selection => {    
        this.setState({selection})
        /*,
            () => {
                if (this.state.selection.length != 0) {
                    for (let i = 0; i < this.state.selection.length; i++) {
                        test[test.length] = this.state.selection[i].value
                    }
                    filterArticle(test)
                }
            })*/
        /*if (this.state.selection != null) {
            filterArticle(this.state.selection[0].value)
        }*/
    }

}

export default connect(state => ({
    articles: state.articles
}), {})(App)


/*
    <Select 
        options = {options} value = {this.state.selection} 
        onChange = {this.changeSelection} 
        multi = {true} 
    />
    <Filter />
*/