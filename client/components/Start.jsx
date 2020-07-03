import React from 'react'
import { connect } from 'react-redux'
import { fetchQuestions } from '../actions'

import { HashRouter as Router, Route, Link } from 'react-router-dom'

import Question from "./Question"

class Start extends React.Component {
    componentDidMount() {
        document.body.style.backgroundImage = 'url(/images/mordor.jpg)';
        document.body.style.backgroundSize = 'cover';
    }

    componentWillUnmount() {
        document.body.style.backgroundImage = null;
        document.body.style.backgroundSize = null
    }

    handleClick = () => {
        this.props.dispatch(fetchQuestions())
    }
    
    render() {
        return (
            <div>
                <h1>Quiz me tender</h1>
                <button type="submit" value="Start quiz!" onClick={this.handleClick}>Let's go!</button>

                <Router>
                 <Link to="question">click start</Link>
                </Router>
            </div>
        )
    }
}

export default connect()(Start)
