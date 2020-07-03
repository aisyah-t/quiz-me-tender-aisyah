import React from 'react'
import {connect} from 'react-redux'

import Question from "./Question"
import { submitName } from '../actions';

class Start extends React.Component {
    state = {
        team1: "",
        team2: "",
        team3: "",
        clicked: false,
    }

    componentDidMount() {
        document.body.style.backgroundImage = 'url(/images/mordor.jpg)';
        document.body.style.backgroundSize = 'cover';
    }

    componentWillUnmount() {
        document.body.style.backgroundImage = null;
        document.body.style.backgroundSize = null
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {team1,team2,team3} = this.state
        this.props.dispatch(submitName(team1, team2, team3))
    }

    handleClick = (e) => {
        this.setState({
            clicked: true
        })
    }
    
    render() {
        return (
            <div className="mordor">
                <h1>QUIZ ME TENDER</h1>
                    <h2>You'll be tender by the time Andy is done with you....</h2>
                        <h3>Pick a name for Andy to call you by</h3>
                        <form onSubmit={this.handleSubmit}>
                            <div className="article">
                                <label>Team One : </label>
                                <div>
                                    <input type="text" name="team1" value={this.state.team1} onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div className="article">
                                <label>Team Two : </label>
                                <div>
                                    <input type="text" name="team2" value={this.state.team2} onChange={this.handleChange}/>
                                </div>
                            </div>
                            <div className="article">
                                <label>Team Three : </label>
                                <div>
                                    <input type="text" name="team3" value={this.state.team3} onChange={this.handleChange}/>
                                </div>
                            </div>
                        <input type="submit" value="Submit" onClick={this.handleClick}/>
                        </form>
                    <p>There is no ring, there is just the one Andy, to rule them all</p>
                    <p>P.S. The floor is lava</p>
                { this.state.clicked && <Question/> }
            </div>
        )
    }
}

export default connect()(Start)