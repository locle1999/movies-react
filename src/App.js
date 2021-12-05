import React, { Component } from "react";
import './components/Style.css'
import MainComponent from "./components/MainComponent";
import axios from "axios";
class App extends Component {

  render() {
    return (
      <div className="Container">
        <MainComponent />
      </div>
    );
  }
}

export default App;