import React, { Component } from "react";
import axios from "axios";

class CreateTodoEdit extends Component {
  state = {
    title: this.props.title || "",
    isDone: this.props.isDone || false
  };
  render() {
    const { isDone, title } = this.state;
    return (
      <form>
        <div className="form-group">
          <label htmlFor="title">Title of todo</label>
          <input
            type="text"
            name="title"
            className="form-control"
            id="title"
            value={title}
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Todo Completed?</label>
          <select
            type="text"
            name="is-done"
            className="form-control"
            id="is-done"
            value={isDone}>
            <option value="true">Yes</option>
           <option value="false">No</option>
            </select>
        </div>
      </form>
    );
  }
}

export default CreateTodoEdit;
