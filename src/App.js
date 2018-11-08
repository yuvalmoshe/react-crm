import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
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
              <li><Link to="/Clients">Clients</Link></li>
              <li><Link to="/Actions">Actions</Link></li>
              <li><Link to="/Analytics">Analytics</Link></li>
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
