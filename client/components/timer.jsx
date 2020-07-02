import React from 'react'
//import { HashRouter as Router, Route, Link , Redirect} from 'react-router-dom'

class Timer extends React.Component {
    state = {
        time: 30
    }

    
    render() {
        return (
            <>
                this is the timer
                <h2>{this.state.time}</h2>
            </>
        )
    }

}

export default Timer