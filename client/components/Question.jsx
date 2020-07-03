import React from 'react'
//import { HashRouter as Router, Route, Link , Redirect} from 'react-router-dom'
import Timer from "./timer"
import { connect } from 'react-redux'
import marked from "marked"
//redux 
//import { getQuestion } from '../actions'


class Question extends React.Component {
    state = {
        count: 0,
        0: [],
        1: [],
        2: [],
        3: [],
        4: []
    }

    // method: push all answers into the arrays
    addChoicesToArray = (questionObj, questionNumber) => {
        let newArr = []
        newArr.push(questionObj.correct_answer)
        newArr.push(questionObj.incorrect_answers[0])
        newArr.push(questionObj.incorrect_answers[1])
        newArr.push(questionObj.incorrect_answers[2])
        let shuffledArr = this.shuffleArray(newArr)
        this.setState({
            [questionNumber]: shuffledArr
        })
    }

    shuffleArray = (array) => {
        let currentIndex = array.length
        let temporaryValue, randomIndex
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex -= 1
            temporaryValue = array[currentIndex]
            array[currentIndex] = array[randomIndex]
            array[randomIndex] = temporaryValue
        }
        return array
    }

    componentDidMount() {
        document.body.style = "animation: 11s ease-out 0s 5 forwards timeranimate"
        this.addChoicesToArray(this.props.questions[0], 0)
        this.addChoicesToArray(this.props.questions[1], 1)
        this.addChoicesToArray(this.props.questions[2], 2)
        this.addChoicesToArray(this.props.questions[3], 3)
        this.addChoicesToArray(this.props.questions[4], 4)
    }

    nextquestion = () => {
        console.log("the func in question was run")
        this.setState({
            count: this.state.count + 1

        })
    }

    render() {
        return (
            <>
                <center>
                    <h1>Question: {this.state.count + 1}</h1>
                    <div id="thequestion" className="animate__heartBeat animate__animated questionPageQuestion"
                        dangerouslySetInnerHTML={{ __html: marked(this.props.questions[this.state.count].question) }}>
                    </div>
                    
                    {this.state[this.state.count].map((choice, i) => {
                        return <h1 key={`choice_${i}`} dangerouslySetInnerHTML={{ __html: marked(choice) }}></h1>})}
                    <Timer next={this.nextquestion} />
                </center>
            </>
        )
    }

}

function mapStateToProps(state) {
    return {
        questions: state.questions
    }
}

export default connect(mapStateToProps)(Question)
