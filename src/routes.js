import React from "react";
import NormalLoginForm from "./components/login/login";
import { Route, Switch } from "react-router-dom";
import DashboardLayout from "./pages/layout/layout";

function Routes() {
  return (
          <Switch>
            <Route path="/dashboard" >
              <DashboardLayout />
            </Route>
            <Route path="/login" >
              <NormalLoginForm />
            </Route>
            <Route path="/" >
              <NormalLoginForm />
            </Route>
          </Switch>
  );
}

export default Routes;
