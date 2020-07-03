import React from 'react'
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import marked from "marked"

class Answer extends React.Component {
    state = {

    }

    componentDidMount() {

    }
    loopsans = () => {
        console.log(this.props.ans)
        
        // for(let i=0; i < this.props.ans.length; i++){
        //     console.log("geting ans " + i)
        //     return <div>Question {i}: <div id="theans" className="animate__heartBeat  animate__animated "
        //     dangerouslySetInnerHTML={{ __html: marked(this.props.ans[i].correct_answer) }}>
        // </div></div>
        // }
       return this.props.ans.map((ans, i)=>{ 
           
            
            return (<tr><th>Question {i + 1}</th><th><span id="theans" className="animate__heartBeat  animate__animated "
    dangerouslySetInnerHTML={{ __html: marked(ans.correct_answer) }}></span></th></tr> 
    )})
    }

    render() {
      
        return (
            <>
              
                
               <div>
               
                <h2>Answers</h2>
               <table>
                {this.loopsans()}
                </table>
                </div>

                    <Link to="/score"><button>Continue to scores</button></Link>


            </>
        )
    }
}
function mapStateToProps(state) {
    return {
        ans: state.questions
    }
}
export default connect(mapStateToProps)(Answer)