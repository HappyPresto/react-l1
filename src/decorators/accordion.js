import React, {Component as ReactComponent} from 'react'

export default (OriginalComponent) => class Accordion extends ReactComponent { // React.Component
    state = {
        openItemId: null
    }

    render() {
        const {articles} = this.props
        return <OriginalComponent {...this.props} toggleOpenItem = {this.toggleOpenItem} openItemId = {this.state.openItemId}/>
    }

    toggleOpenItem = openItemId => ev => {
        this.setState({
            openItemId: openItemId === this.state.openItemId ? null : openItemId
        })
    }
}