import React, { Component } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Search from "./components/Search";
import Saved from "./components/Saved";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from "react-bootstrap/Nav";

class App extends Component {
  render() {
    return (
      <>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/">Google Books</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Search</Nav.Link>
            <Nav.Link href="/saved">Save</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Router>
        <Route exact path="/" component={Search}/>
        <Route exact path="/saved" component={Saved}/>
      </Router>
      </>
    );
  }
}

export default App;
