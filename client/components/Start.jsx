import React from 'react'
import Question from "./Question"

class Start extends React.Component {
    componentDidMount() {
        document.body.style.backgroundImage = 'url(/images/mordor.jpg)';
        document.body.style.backgroundSize = 'cover';
    }

    componentWillUnmount() {
        document.body.style.backgroundImage = null;
        document.body.style.backgroundSize = null
    }
    
    render() {
        return (
            <div>
                <p>This is the landing page!!</p>
                <Question/>
            </div>
        )
    }
}

export default Start