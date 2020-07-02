import React from 'react'
import {connect} from 'react-redux'

import Question from "./Question"

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
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        console.log('send this to redux and do alllll the things!')
    }

    handleClick = (e) => {
        this.setState({
            clicked: true
        })
    }
    
    render() {
        const teamName = this.state
        console.log(teamName)
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
                        </form>
                        <button type="submit" onClick={this.handleClick}>Submit</button>
                    <p>There is no ring, there is just the one Andy, to rule them all</p>
                    <p>P.S. The floor is lava</p>
                { this.state.clicked && <Question/> }
            </div>
        )
    }
}

const mapStateToProps = (globalState) => {
    return {
      team1: globalState.team1,
      team2: globalState.team2,
      team3: globalState.team3,
    }
  }

export default connect(mapStateToProps)(Start)