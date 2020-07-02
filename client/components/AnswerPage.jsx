import React from 'react'
import { HashRouter as Router, Route, Link } from 'react-router-dom'

class AnswerPage extends React.Component {
    state = {
        showAnswers = false
    }

    handleSubmit = () => {
        this.state.showAnswers === false ? this.setState({ showAnswers: true }) : this.setState({ showAnswers: false })
    }

    render () {
        const showAnswersIsTrue = this.state.showAnswers

        return (
            <>
                {showAnswersIsTrue
                    ? <input type="submit" onClick={this.HandleSubmit}>Hide answers</input>
                    : <input type="submit" onClick={this.HandleSubmit}>Show answers</input>
                }
                {showAnswersIsTrue &&
                    // Update props below
                    props.categories.map(question => {
                        return (
                        // Question
                        <Answer id={`answer_${question.id}`} answer={question.answer} />
                        )
                    })
                }
                <Link to="/score">Continue to scores</Link>
            </>
        )
    }
}

export default AnswerPage