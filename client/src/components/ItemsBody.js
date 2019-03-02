import React, { Component } from "react";
import ListItems from "./ListItems";
import ListItem from "./ListItem";
import axios from "axios";

class ItemBody extends Component {
  state = {
    loading: true,
    todo: {}
  };

  // todosLoading = () => {
  //   if (this.state.loading) {
  //     return <h1>Loading...</h1>;
  //   }
  // };

  componentDidMount() {
    axios.get("/api/todo").then(response => {
      console.log(response);
      this.setState({
        loading: false,
        todo: response.data
      });
    });
  }

  render() {
    return (
      <ListItems>
        <ListItem text="hello" />
      </ListItems>
    );
  }
}

export default ItemBody;
