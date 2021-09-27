import React from "react";
import { Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import IssuesTable from "./components/IssuesTable/IssuesTable";
import Issue from "./components/Issues/Issues"

export default function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/"><IssuesTable /></Route>
        <Route path={`/:issueId`}><Issue /></Route>
      </Switch>
    </div>
  );
}