import React from 'react'
//rrimport { HashRouter as Router, Route, Link , Redirect} from 'react-router-dom'

class Timer extends React.Component {
    state = {
        time: 30
    }

    componentDidMount(){
      
            setInterval(()=>{

                if(this.state.time > 0) {
                this.setState({
                    time: this.state.time - 1
                })
                 }
                 else{
                     console.log("timer is done")

                 }
            }, 1000)
        
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