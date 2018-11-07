import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Clients from "./components/clients"
import Actions from "./components/actions"
import Analytics from "./components/analytics"

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Router>
          <div className="App">
            <ul className="main-links">
              <li><a href="Clients">Clients</a></li>
              <li><a href="Actions">Actions</a></li>
              <li><a href="Analytics">Analytics</a></li>
            </ul>
            <Route path="/clients" exact render={() => <Clients/>} />
            <Route path="/actions" exact render={()=> <Actions />} />
            <Route path="/analytics" exact render={()=> <Analytics />} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
