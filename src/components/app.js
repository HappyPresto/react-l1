import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ArticleList from './articleList'
import ArticleChart from './articlesChart'
import UserForm from './userForm'
import Filters from './Filter'
import Counter from './Counter'
import {connect} from 'react-redux'

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
            <div>
                <Counter />
                <UserForm />
                <Filters />
                <ArticleList />
                <ArticleChart articles = {this.props.articles}/>
            </div>
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