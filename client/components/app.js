import React from "react";
import Navbar from "./navbar";
import Home from "./home"

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home />
      </div>
    );
  }
}
