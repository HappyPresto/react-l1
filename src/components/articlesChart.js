import React, {Component} from 'react'
import PropTypes from 'prop-types'

class ArticleChart extends Component {
    static propTypes = {

    }

    componentDidMount() {
        /// d3 works with this.refs.chart
    }

    componentWillReceiveProps(nextProps) {
        // update chars for new articles
    }

    render() {
        return <div ref = "chart" />
    }

    componentWillUnmount() {
        //do some cleanup
    }
}

export default ArticleChart