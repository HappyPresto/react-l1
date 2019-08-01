import React, {Component as ReactComponent} from 'react'

export default (OriginalComponent) => class WrappedComponent extends ReactComponent {
    state = {
            isOpen: false
    }

    componentDidMount() {
        console.log("---", "mounting")
    }

    componentDidUpdate() {
        console.log("---", "updating")
    }
    
    render() {
        return <OriginalComponent {...this.props} isOpen = {this.state.isOpen} toggleOpen = {this.toggleOpen}/>
    }

    toggleOpen = (ev) => { // stage0 - toggleOpen = () => {
        // toggleOpen(ev) , аля (e). Можно получить el (реактовская обертка) или el.nativeEvent
        ev && ev.preventDefault && ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
} 