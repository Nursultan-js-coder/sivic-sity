import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeLandingPage from "./client/pages/HomeLandingPage"
import Layout from "./client/components/common/Layout";
import {Provider} from "mobx-react"
import * as stores from "./client/stores"

function App() {
  return (
      <Provider {...stores}>
    <Router>
      <Switch>
          <Layout>
              <Route  path="/home">
                  <HomeLandingPage/>
              </Route>
          </Layout>

      </Switch>
    </Router>
      </Provider>
  );
}

export default App;
