import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import Home from '../pages/home'
import Details from '../pages/details'
import NoMatch from '../pages/no-match'

import Header from './Header'

class App extends Component {
  state = {
    rsvp: true
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Header 
            test={this.props}
          />
          <Switch>
            <Route 
              path="/" 
              exact 
              render={(props)=><Home {...props} rsvp={this.state.rsvp}/>} />
            <Route 
              path="/details" 
              exact 
              render={(props)=><Details {...props} />} />
            <Route component={NoMatch}/>
          </Switch>
          <div style={{height: '10px',backgroundColor: '#A94E30'}}></div>
        </div>
      </Router>
    )
  }
}

export default App
