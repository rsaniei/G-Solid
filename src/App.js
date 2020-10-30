import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './pages/Home'
import './App.css';
import 'antd/dist/antd.css';
import { LoggedOut, LoggedIn, LoginButton } from '@solid/react';

function App() {

  return (
    <div>
      <LoggedOut>
        <section className="section">
          <p className="content">Please connect to your Pod:)</p>
          <p className="content">
            <LoginButton popup="popup.html" className="button is-large is-primary">Connect</LoginButton>
          </p>
        </section>
      </LoggedOut>
      <LoggedIn>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </LoggedIn>
    </div>
  );

}


export default App;
