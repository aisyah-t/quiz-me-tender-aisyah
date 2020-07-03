import React from 'react'
import {connect} from 'react-redux'
import { fetchScore, submitScore } from '../actions';
import { HashRouter as Router, Route, Link , Redirect} from 'react-router-dom'

class Score extends React.Component {
    state = {
        team1: '',
        team2: '',
        team3: '',
    }

    componentDidMount(){
      console.log('mounted')
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const {team1,team2,team3} = this.state
        this.props.dispatch(submitScore(team1, team2, team3))
    }

    render() {
        console.log(this.state)
        const team1 = this.props.submitName.team1
        const team2 = this.props.submitName.team2
        const team3 = this.props.submitName.team3
        return (
            <div>
                score page
                <Router>
                    <Link to="question">next question</Link><br></br>
                    <Link to="Winner">Winner page</Link>
                </Router>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Team {team1} : </label>
                        <div>
                            <input type="number" name='team1' value={this.state.team1} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div>
                        <label>Team {team2} : </label>
                        <div>
                            <input type="number" name='team2' value={this.state.team2} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <div>
                        <label>Team {team3} : </label>
                        <div>
                            <input type="number" name='team3' value={this.state.team3} onChange={this.handleChange}/>
                        </div>
                    </div>
                    <input className="button" type="submit" value="Submit"/>
                    {Object.keys(this.props.submitScore).map(teams => {
                        return (
                            this.props.submitScore[teams].map(score => {
                            return <h1 className="display">{score}</h1>
                        })
                    )})}
                </form>
            </div>
        )
    }
}

function mapStateToProps({submitName, submitScore}) {
    return {
        submitName,
        submitScore
    }
}

export default connect(mapStateToProps)(Score)