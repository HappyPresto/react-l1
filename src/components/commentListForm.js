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