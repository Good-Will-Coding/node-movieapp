import React, { Component } from "react";
import SingleTodoList from "./SingleMovieList";
import CreateTodoEdit from "./CreateMovieEdit";

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

  updateState = (title, isDone) => {
    this.setState({
      title,
      isDone
    });
  };

  render() {
    if (this.state.editing) {
      return (
        <CreateTodoEdit
          title={title}
          isDone={isDone}
          toggleEdit={this.onEdit}
          id={this.props.id}
          updateState={this.updateState}
        />
      );
    }

    const { title, isDone } = this.state;
    return (
      <SingleTodoList
        title={title}
        isDone={isDone}
        onEdit={this.onEdit}
        id={this.props.id}
      />
    );
  }
}

export default TodoCard;
