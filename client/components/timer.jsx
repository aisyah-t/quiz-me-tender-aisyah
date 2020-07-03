import React from 'react'
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom'

class Timer extends React.Component {
    state = {
        time: 1,
        count: 5,
    }

    componentDidMount() {
        //seting the timer as a const is nessiary as that way you can refrance it in clearInterval()
        //other wise even when the component gets unloaded this script keeps going and breaks everything
        let i = 0
        
            console.log("running timer!")
            const timer = setInterval(() => {

                if (this.state.time > 0) {
                    this.setState({
                        time: this.state.time - 1
                    })
                }
                else {
                    console.log("timer is done")
                    
                  
                    if (this.state.count > 1) {
                        this.props.next()
                    this.setState({
                        count: this.state.count - 1,
                        time: 1
                    })
                    }
                    else {
                        console.log("the timer is done 5*")
                    document.getElementById("invisibleLink").click()
                    clearInterval(timer)
                    }
                }

            }, 1000)
          
        
    }
    componentWillUnmount() {
       // clearInterval(this.timer)
    }

    render() {
        return (
            <>
                this is the timer
                <h2>{this.state.time}</h2>
                {/* dont know if its possible to use a react router in js to re direct
                 so gonna make a invisible link that gets clicked after the timer is done*/}
                <div>
                    <Router>
                        <Link id="invisibleLink" to="answer"></Link>
                    </Router>
                </div>
            </>
        )
    }

}

export default Timer