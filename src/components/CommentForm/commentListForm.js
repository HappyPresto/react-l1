import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './commentListForm.css'
import {connect} from 'react-redux'
import {addComment} from '../../AC'

class CommentForm extends Component {
    static propTypes = {
        articleId: PropTypes.string.isRequired,
        addComment: PropTypes.func.isRequired,
    }

    state = {
        user: '',
        text: ''
    }

    render() {
        return (
            <form onSubmit = {this.handleSubmit}>
                name: <input value = {this.state.user}
                             onChange = {this.handleChange('user')}
                             className = {this.getClassName('user')} />
                comment: <input value = {this.state.text} 
                                onChange = {this.handleChange('text')}
                                className = {this.getClassName('text')} />
                <input type = "submit" value = "submit"/>
            </form>
        )
    }

    handleSubmit = ev => {
        ev.preventDefault()
        this.props.addComment(this.state)
        this.setState({
            user: '',
            text: ''
        })
    }

    getClassName = type => this.state[type].length < limits[type].min 
        ? 'form-input__error' : ""

    handleChange = type => ev => {
        const {value} = ev.target
        if (value.length > limits[type].max) return
        this.setState({
            [type]: value
        })
    }
}

const limits = {
    user: {
        min: 5,
        max: 15
    },
    text: {
        min: 20,
        max: 50
    }
}

export default connect(null, (dispatch, ownProps) => ({addComment: (comment) => dispatch(addComment(comment, ownProps.articleId))
}))(CommentForm)

/*
import React, {Component} from 'react'
import PropTypes from 'prop-types'

class CommentListForm extends Component {
    static propTypes = {

    }

    state = {
        userName: '',
        comment: '',
        userNameValid: false,
        commentValid: false
    }

    render() {
        return (
            <div>
                Name: <input type = "text" name = "userName" value = {this.state.userName} onChange = {this.checkInput()}/>
                Comment: <input type = "text" name = "comment" value = {this.state.comment} onChange = {this.checkInput()}/>
            </div>
        )
    }

    checkInput = () => ev => {
        const name = ev.target.name
        const value = ev.target.value
        this.setState(
            {[name]: [value]},
            () => {this.validateField(name, value)}
        )
        
    }

    validateField(name, value) {
        if (name == "userName") {
            if ((value.length >= '5') && (value.length <= '20')) {
                this.setState(
                    {userNameValid: true}
                )
            }   
            else {
                this.setState(
                    {userNameValid: false}
                )
            }
        }    
        if (name == "comment") {
            if ((value.length >= '20') && (value.length <= '50')) {
                this.setState(
                    {commentValid: true}
                )
            }   
            else {
                this.setState(
                    {commentValid: false}
                )
            }
        } 
    }
}

export default CommentListForm
*/