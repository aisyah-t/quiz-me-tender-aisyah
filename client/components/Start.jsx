import React from 'react'
import { HashRouter as Router, Route, Link , Redirect} from 'react-router-dom'

class Start extends React.Component {
    state = {
      
    }

    componentDidMount(){
      
    }

    
    render() {
        return (
            <>
              
                <Router>
                <Link to="question"><h1>start!</h1></Link>
               </Router>
               
            </>
        )
    }

}

export default Start