import React from 'react'
import { HashRouter as Router, Route, Link , Redirect} from 'react-router-dom'

class Answer extends React.Component {
    state = {
      
    }

    componentDidMount(){
      setTimeout(()=>{
        console.log("thunder out!")
      }, 4000)
    }

    
    render() {
        return (
            <>
               <img src="./images/cloud.png" alt="" id="cloud1" class="clouds"/>
               <img src="./images/cloud.png" alt="" id="cloud2" class="clouds"/>
               <img src="./images/cloud.png" alt="" id="cloud3" class="clouds"/>
               <img src="./images/cloud.png" alt="" id="cloud4" class="clouds"/>
               <img src="./images/lightning.png" alt="" id="ltn1" class="ltn"/>

               <img src="./images/lightning.png" alt="" id="ltn2" class="ltn"/>
            </>
        )
    }

}

export default Answer