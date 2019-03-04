import React, { Component } from "react";
import SingleTodoList from "./SingleTodoList";

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
            <div>Editing!</div>
        )
    }


    const { title, isDone } = this.state;
    return <SingleTodoList title={title} isDone={isDone} onEdit={this.onEdit} />;
  }
}

export default TodoCard;
