import "./App.css";
import NavBar from "./components/NavBar";
import News from "./components/News";
import Login from "./components/login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import React, { Component } from 'react'

export class App extends Component {

  constructor() {
    super();
    this.state = {
      authorized: false
    }
  }

  loginHandler = () => {
    this.setState({
      authorized: true
    })
  }

  render() {
    return (
      <Router>
        {this.state.authorized ? <NavBar /> : <></>}
        <Routes>
          <>
            <Route exact path="/" element={<News key="general" category="general" authorized={this.state.authorized} />} />
            <Route exact path="/login" element={<Login login={this.loginHandler} title="login hai" />} />
            <Route exact path="/general" element={<News key="general" category="general" authorized={this.state.authorized} />} />
            <Route exact path="/technology" element={<News key="technology" category="technology" authorized={this.state.authorized} />} />
            <Route exact path="/entertainment" element={<News key="entertainment" category="entertainment" authorized={this.state.authorized} />} />
            <Route exact path="/sports" element={<News key="sports" category="sports" authorized={this.state.authorized} />} />
            <Route exact path="/science" element={<News key="science" category="science" authorized={this.state.authorized} />} />
            <Route exact path="/technology" element={<News key="technology" category="technology" authorized={this.state.authorized} />} />
          </>
        </Routes>
      </Router>
    );
  }
}

export default App;