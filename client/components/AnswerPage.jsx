import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

import Answer from "./Answer"
import Andy from "./Andy"

class AnswerPage extends React.Component {
    state = {
        showAnswers: false,
        god: false,
    }

    handleSubmit = () => {
        this.setState({
            showAnswers: !this.state.showAnswers
        })
    }
    thunder = () => {
console.log("YES")
        this.setState({
            god: !this.state.god
        })
    }
    render() {
        return (
            <Router>

                    {this.state.god
                        && <Andy/>
                     
                    }   

                 <div className="secret" onClick={this.thunder}></div>
                <center>
                    <h1>ANSWER TIME!</h1>
                    {this.state.showAnswers
                        ? <Answer />
                        : <div>now pass your pice of paper to the group on your right<br></br><button onClick={this.handleSubmit}> show Answers</button></div>
                    }
                </center>
            </Router>
        )
    }
}

export default AnswerPage