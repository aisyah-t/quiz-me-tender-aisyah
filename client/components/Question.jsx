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
        example: "test",
        questions: {
            categories: [
                {
                    "category": "Geography",
                    "type": "multiple",
                    "difficulty": "medium",
                    "question": "What is the name of the former country that was succeeded by countries such as Serbia, Croatia and Slovenia?",
                    "correct_answer": "Yugoslavia",
                    "incorrect_answers": [
                        "Czechoslovakia",
                        "Abkhazia",
                        "South Ossetia"
                    ]
                },
                {
                    "category": "Geography",
                    "type": "multiple",
                    "difficulty": "medium",
                    "question": "What is the right way to spell the capital of Hungary?",
                    "correct_answer": "Budapest",
                    "incorrect_answers": [
                        "Boodapest",
                        "Bhudapest",
                        "Budapast"
                    ]
                },
                {
                    "category": "Geography",
                    "type": "multiple",
                    "difficulty": "medium",
                    "question": "How tall is One World Trade Center in New York City?",
                    "correct_answer": "1,776 ft",
                    "incorrect_answers": [
                        "1,888 ft",
                        "1,225 ft",
                        "1,960 ft"
                    ]
                },
                {
                    "category": "Geography",
                    "type": "multiple",
                    "difficulty": "medium",
                    "question": "In the 2016 Global Peace Index poll, out of 163 countries, what was the United States of America ranked?",
                    "correct_answer": "103",
                    "incorrect_answers": [
                        "10",
                        "59",
                        "79"
                    ]
                },
                {
                    "category": "Geography",
                    "type": "multiple",
                    "difficulty": "medium",
                    "question": "Colchester Overpass, otherwise known as &quot;Bunny Man Bridge&quot;, is located where?",
                    "correct_answer": "Fairfax County, Virginia",
                    "incorrect_answers": [
                        "Medford, Oregon",
                        "Braxton County, Virgina",
                        "Lemon Grove, California"
                    ]
                }
            ]

        }
    }
    componentDidMount() {
        document.body.style = "animation: 11s ease-out 0s 5 forwards timeranimate"
        //   this.props.dispatch(getQuestion())
    }
    componentWillUnmount() {

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
                    question: {this.state.count + 1}
        <div id="thequestion" className="animate__heartBeat  animate__animated " 
        dangerouslySetInnerHTML={{__html: marked(this.state.questions.categories[this.state.count].question)}}>
        </div>

                    <Timer next={this.nextquestion} />
                </center>
            </>
        )
    }

}

// function mapStateToProps(globalState){
//     return {
//         questions: this.globalState.question.count
//     }
// }
export default Question
//export default connect(mapStateToProps) (Question)
