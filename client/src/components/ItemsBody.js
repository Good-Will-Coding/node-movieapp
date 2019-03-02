import React, { Component } from "react";
import ListItems from "./ListItems";
import ListItem from "./ListItem";
import axios from "axios";
// import _ from 'lodash';

class ItemBody extends Component {
  state = {
    loading: true,
    todos: {}
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
        todos: response.data
      });
    });
  }

  renderTodos = () => {
    const { todos } = this.state;
    return todos.map(todo => {
      return (
        <ListItem key={todo.id} title={todo.title} isDone={todo.is_done} />
      );
    });
  };

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }
    return <ListItems>{this.renderTodos()}</ListItems>;
  }
}

export default ItemBody;
