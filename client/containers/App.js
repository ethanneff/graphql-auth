import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "../components/Header";
import NotFound from "./NotFound";
import LandingPage from "./LandingPage";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import Dashboard from "./Dashboard";
import RequireAuth from "../components/RequireAuth";

const Main = () => {
  return (
    <div className="container">
      <Header />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={LoginForm} />
        <Route path="/signup" component={SignupForm} />
        <Route path="/dashboard" component={RequireAuth(Dashboard)} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default Main;
