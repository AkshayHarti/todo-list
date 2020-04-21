import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TodoApp from "./components/TodoApp";

export default function RouterComponent() {
  return (
    <Router>
      {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/">
          <TodoApp />
        </Route>
      </Switch>
    </Router>
  );
}
