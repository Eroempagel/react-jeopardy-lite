import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Welcome from "./components/welcome/Welcome";
import Clock from "./components/clock/Clock";
import Contact from "./components/contact/Contact";
import Navigation from "./components/navigation/Navigation";
import NotFoundPage from "./components/not-found-page/NotFoundPage";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Welcome {...props} name="Erik" />}
        />
        <Route exact path="/clock" component={Clock} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/welcome/:name" component={Welcome} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
