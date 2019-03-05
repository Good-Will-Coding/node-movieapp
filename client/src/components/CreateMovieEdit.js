import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class CreateTodoEdit extends Component {
  state = {
    title: this.props.title || "",
    isDone: this.props.isDone || false
  };

  onChangeItem = event => {
    const target = event.target;
    const name = target.name;

    this.setState({
      [name]: target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { title, isDone } = this.state;
    const { id, history } = this.props;
    if (id) {
      axios
        .put(`/api/todo/${id}`, {
          title: title,
          is_done: isDone === "true"
        })
        .then(() => {
          this.props.updateState(title, isDone === "true");
          this.props.toggleEdit();
        });
    } else {
      axios
        .post("/api/todo", { title: title, is_done: isDone === "true" })
        .then(() => {
          history.push("/");
        });
    }
  };

  render() {
    const { isDone, title } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title of movie</label>
          <input
            type="text"
            name="title"
            className="form-control"
            id="title"
            value={title}
            onChange={this.onChangeItem}
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Movie Watched?</label>
          <select
            type="text"
            name="isDone"
            className="form-control"
            id="is-done"
            value={isDone}
            onChange={this.onChangeItem}
          >
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
          <div className="d-flex justify-content-between align-items-center mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={this.props.toggleEdit}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default withRouter(CreateTodoEdit);
