import React from 'react'
import { HashRouter as Router, Route, Link, Redirect } from 'react-router-dom'
//our components / pages
import Timer from "./timer"



const App = () => {
  return (
    <>
    <h1>app</h1>
      <Timer/>
     
    <Router>
    <Route exact path="/"><Redirect to="/start" /></Route>
    <Route exact path="/start" component={Start} />
      

    </Router>
    </>
  )
}

export default App
