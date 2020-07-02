import React from 'react'
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom'
//our components / pages

import Start from "./Start"
import Answer from "./Answer"
import Question from "./Question"
import Score from "./Score"
import Winner from "./Winner"
import Andy from "./Andy"

const App = () => {
  return (
    <>
      <Router>
        <Route exact path="/"><Redirect to="/start" /></Route>
        <Route exact path="/start" component={Start} />
        <Route exact path="/question" component={Question} />
        <Route exact path="/answer" component={Answer} />
        <Route exact path="/score" component={Score} />
        <Route exact path="/winner" component={Winner} />
      </Router>
    </>
  )
}

export default App
