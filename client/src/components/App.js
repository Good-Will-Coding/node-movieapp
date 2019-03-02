import React, { Component } from "react";
import TopNav from "./TopNav";
import ItemsBody from './ItemsBody';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav title="Todo" />
        <div className="container">
          <ItemsBody />
        </div>
      </div>
    );
  }
}

export default App;
