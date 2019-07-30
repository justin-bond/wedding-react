import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Home from '../pages/home'
import Test from '../pages/test'
import NoMatch from '../pages/no-match'

import Header from './header'

class App extends Component {
  state = {
    rsvp: true
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route 
              path="/" 
              exact 
              render={(props)=><Home {...props} rsvp={this.state.rsvp}/>} />
            <Route 
              path="/test" 
              exact 
              render={(props)=><Test {...props} rsvp={this.state.rsvp}/>} />
            <Route component={NoMatch}/>
          </Switch>
          <div style={{height: '10px',backgroundColor: '#5D6750'}}></div>
        </div>
      </Router>
    )
  }
}

export default App
