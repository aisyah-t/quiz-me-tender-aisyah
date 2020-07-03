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
    }

    componentDidMount() {
        document.body.style = "animation: 11s ease-out 0s 5 forwards timeranimate"
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
                        dangerouslySetInnerHTML={{ __html: marked(this.props.questions[this.state.count].question) }}>
                    </div>

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
