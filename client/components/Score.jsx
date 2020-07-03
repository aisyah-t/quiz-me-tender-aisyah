import React from 'react'
import { connect } from 'react-redux'
import { fetchQuestions } from '../actions'
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom'

class Score extends React.Component {
    state = {
        redirect: null
    }

    componentDidMount() {
        this.setState({
            redirect: null
        })
    }


    handleSubmit = (e) => {
        e.preventDefault()

        this.props.dispatch(fetchQuestions())
            .then(() => {
                this.setState({
                    redirect: "/Question"
                })
            })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }

        return (
            <Router>
                <h1>Scores</h1>
                <input className="button" type="submit" value="Next round" onClick={this.handleSubmit} />
                <br />
                <br />
                <Link to="Winner">

                    <input className="button" type="submit" value="Winner..." />
                </Link>
            </Router>
        )
    }

}

export default connect()(Score)