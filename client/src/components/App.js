import React, { Component } from "react";
import TopNav from "./TopNav";
import ItemsBody from "./ItemsBody";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SingleItem from "./SingleItem";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <TopNav title="Todo" />
          <div className="container">
            <Switch>
              <Route path="/:id" component={SingleItem} />
              <Route path="/" exact component={ItemsBody} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
