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
                awnser page
                <Router>
                <Link to="score">see score</Link>
                </Router>
            </>
        )
    }

}

export default Answer