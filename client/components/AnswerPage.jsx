import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

class AnswerPage extends React.Component {
    state = {
        showAnswers: false
    }

    handleSubmit = () => {
        this.state.showAnswers == false 
            ? this.setState({ showAnswers: true })
            : this.setState({ showAnswers: false })
    }

    render () {
        return (
            <Router>
                {this.state.showAnswers
                    ? <input type="submit" value="Hide answers" onClick={this.handleSubmit} />
                    : <input type="submit" value="Show answers" onClick={this.handleSubmit} />
                }
                {this.state.showAnswers &&
                <h1>show answers is TRUE!</h1>
                    // Update props below
                    // props.categories.map(question => {
                    //     return (
                    //     // Question
                    //     <Answer id={`answer_${question.id}`} answer={question.answer} />
                    //     )
                    // })
                }

                <Link to="/score"><button>Continue to scores</button></Link>
            </Router>
        )
    }
}

export default AnswerPage