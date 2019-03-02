import React, { Component } from "react";
import ListItems from "./ListItems";
import ListItem from "./ListItem";

class ItemBody extends Component {
  render() {
    return (
      <ListItems>
        <ListItem text="hello" />
      </ListItems>
    );
  }
}

export default ItemBody;
