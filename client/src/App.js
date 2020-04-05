import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Search from "./components/Search";
import Saved from "./components/Saved";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path="/" component={Search}/>
        <Route exact path="/saved" component={Saved}/>
      </Router>
    );
  }
}

export default App;
