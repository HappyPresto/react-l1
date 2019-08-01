import React, {Component} from 'react'
import PropTypes from 'prop-types'

class UserForm extends Component {
    static propTypes = {

    }

    state = {
        userName: ''
    }

    render() {
        return (
            <div>
                Name: <input type="text" value={this.state.userName} onChange = {this.handleUserChange}/>
            </div>
        )
    }

    handleUserChange = (ev) => {
        this.setState({
            userName: ev.target.value
        })
    }
}

export default UserForm