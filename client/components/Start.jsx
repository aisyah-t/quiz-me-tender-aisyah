import React from 'react'
import { connect } from 'react-redux'
import { fetchQuestions } from '../actions'

class Start extends React.Component {
    componentDidMount() {
        document.body.style.backgroundImage = 'url(/images/mordor.jpg)';
        document.body.style.backgroundSize = 'cover';
    }

    componentWillUnmount() {
        document.body.style.backgroundImage = null;
        document.body.style.backgroundSize = null
    }

    render() {
        return (
            <div>
                <h1>Quiz me tender</h1>
                <button type="submit" value="Start quiz!" onClick={() => this.props.dispatch(fetchQuestions())}>Let's go!</button>
            </div>
        )
    }
}

export default connect()(Start)
