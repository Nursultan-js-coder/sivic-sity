import React from "react"
import Content from "../components/dashboard-layout"
import {BrowserRouter, Route, Switch} from "react-router-dom";
import SafetyPage from "./dashboard-pages/safety-page/safety-page";
import AdministrationPage from "./dashboard-pages/adminsistration-page";
import DashboardLayout from "../components/dashboard-layout";
import {Redirect} from "react-router-dom"
import Home from "../pages/Home"
import HealthPage from "./dashboard-pages/health-page/health-page";
import EcologyPage from "./dashboard-pages/ecology-page/ecology-page";

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
                      </DashboardLayout>
                  </Switch>
                {/*<Content/>*/}
              </BrowserRouter>

          </>
    )
}
