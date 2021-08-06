import React from "react"
import Content from "../components/dashboard-layout"
import {BrowserRouter, Route, Switch} from "react-router-dom";
import SafetyPage from "../features/safety/safety-page";
import AdministrationPage from "../features/admin/administration-page";
import DashboardLayout from "../components/dashboard-layout";
import {Redirect} from "react-router-dom"
import Home from "../features/common/Home"
import HealthPage from "../features/health/health-page";
import EcologyPage from "../features/ecology/ecology-page";

export default function HomeLandingPage(){

    return (
          <>
              <BrowserRouter>
                  <Switch>
                      <DashboardLayout>
                        <Route exact path="/home">
                              <Home/>
                        </Route>
                          <Route  path="/home/health-page">
                              <HealthPage/>
                        </Route>
                      <Route path="/home/safety-page">
                          <SafetyPage/>
                      </Route>
                          <Route path="/home/ecology-page">
                          <EcologyPage/>
                      </Route>
                      <Route  path="/home/administration-page">
                      <AdministrationPage/>
                      </Route>
                          <Redirect to="/home"/>
                      </DashboardLayout>
                  </Switch>
                {/*<Content/>*/}
              </BrowserRouter>

          </>
    )
}
