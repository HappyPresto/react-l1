import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ArticleList from './articleList'
import ArticleChart from './articlesChart'
import UserForm from './userForm'
import Filters from './Filter'
import Counter from './Counter'
import {connect} from 'react-redux'
import {HashRouter as Router, Route, NavLink} from 'react-router-dom'

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
            <Router>
                <div>
                    <div>
                        <h2>Main menu</h2>
                        <div><NavLink activeStyle = {{color:'red'}} to="/counter">Counter</NavLink></div>
                        <div><NavLink activeStyle = {{color:'red'}} to="/filters">Filters</NavLink></div>
                        <div><NavLink activeStyle = {{color:'red'}} to="/articles">Articles</NavLink></div>
                    </div>
                    <UserForm />    
                    <Route path = "/counter" component = {Counter} />
                    <Route path = "/filters" component = {Filters} />
                    <Route path = "/articles" component = {ArticleList} />
                    <ArticleChart articles = {this.props.articles}/>
                </div>
            </Router>
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