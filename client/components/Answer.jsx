import React from 'react'
import { HashRouter as Router, Route, Link , Redirect} from 'react-router-dom'

class Answer extends React.Component {
    state = {
      
    }

    componentDidMount(){
      
    }

    
    render() {
        return (
            <>
                <h1>{this.props.answer}</h1>
                <Router>
                <Link to="score">see score</Link>
                </Router>
            </>
        )
    }
}

export default Answer