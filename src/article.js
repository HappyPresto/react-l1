import React, {Component} from 'react'

export default class Article extends Component {
    constructor(props) {
        super(props)
        this.state = { // данные которые будут меняться в течении жизни компонента
            isOpen: false
        }
        this.toggleOpen = this.toggleOpen.bind(this)
    }

    render() {
        const {article} = this.props // дистрактулизация
        const {isOpen} = this.state
        return (
            <div>
                <h3>{article.title}</h3>
                <button onClick = {this.toggleOpen}>
                    {isOpen ? 'Close' : 'Open'}
                </button>
                {this.getBody()}
            </div>
        )
    }

    getBody() {
        if (!this.state.isOpen) return null
        const {article} = this.props
        return <section>{article.text}</section>
    }

    toggleOpen () { // stage0 - toggleOpen = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

/*
export default function Article(props) {
    const {article} = props // диструлизация
    console.log("--- ", article);
    return (
        <div>
            <h3>{article.title}</h3>
            <section>{article.text}</section>
        </div>
    )
}
*/

