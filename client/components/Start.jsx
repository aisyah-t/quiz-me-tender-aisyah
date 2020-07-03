import React from 'react'
import Question from "./Question"
import { HashRouter as Router, Route, Link } from 'react-router-dom'

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
                <p>This is the landing page!!</p>
                <Router>
                 <Link to="question">click start</Link>
                </Router>
            </div>
        )
    }
}

export default Start
