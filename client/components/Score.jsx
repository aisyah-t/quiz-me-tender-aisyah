import React from 'react'
import { HashRouter as Router, Route, Link , Redirect} from 'react-router-dom'

class Score extends React.Component {
    state = {
      
    }

    componentDidMount(){
      
    }

    
    render() {
        return (
            <>
                score page
                <Router>
                <Link to="question">next question</Link><br></br>
                <Link to="Winner">Winner page</Link>
                </Router>
            </>
        )
    }

}

export default Score