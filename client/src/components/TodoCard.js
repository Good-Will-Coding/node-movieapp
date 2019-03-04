import React, { Component } from "react";
import SingleTodoList from "./SingleTodoList";
import CreateEditTodo from './CreateEditTodo';

class TodoCard extends Component {
  state = {
    editing: false,
    title: this.props.title,
    isDone: this.props.isDone
  };

  onEdit = () => {
    this.setState({
      editing: !this.state.editing
    });
  };

  render() {
    if (this.state.editing) {
        return (
            <CreateEditTodo />
        )
    }


    const { title, isDone } = this.state;
    return <SingleTodoList title={title} isDone={isDone} onEdit={this.onEdit} />;
  }
}

export default TodoCard;
