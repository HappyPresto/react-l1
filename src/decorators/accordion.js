import React, {Component as ReactComponent} from 'react'

export default (OriginalComponent) => class WrappedComponent extends ReactComponent {
    state = {
        openItemId: null
    }

    render() {
        const {articles} = this.props
        console.log({articles})
        return <OriginalComponent {...this.props} toggleOpenItem = {this.toggleOpenItem} openItemId = {this.state.openItemId}/>
    }

    toggleOpen = (ev) => {
        ev && ev.preventDefault && ev.preventDefault()
        this.setState({isOpen})
    }

    toggleOpenItem = openItemId => ev => {
        this.setState({
            openItemId: openItemId === this.state.openItemId ? null : openItemId
        })
    }
}