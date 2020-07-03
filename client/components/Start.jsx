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
            <Router>
                <h1>Quiz me tender</h1>
                <button type="submit" value="getQuestions" onClick={this.handleClick}>Get some questions</button>

                <Link to="question"><button type="submit" value="startQuiz">Let's go!</button></Link>
            </Router>
        )
    }
}

export default connect()(Start)
