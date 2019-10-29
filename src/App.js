import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";

import "./App.css";
import About from "./components/About";
import Resources from "./components/Resources";
import Home from "./components/Home";
import Nav from "./components/Nav";
import SubmitResource from "./components/Resources/submitResource";

function App() {
  return (
    <Router>
      <Container>
        <Nav />

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/resources">
            <Resources />
          </Route>
          <Route path="/submit-resource">
            <SubmitResource />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Container>
    </Router>
  );
}

export default App;
