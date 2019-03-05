import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

const SingleTodoList = ({ title, isDone, onEdit, id, history }) => {
  return (
    <div className="card text-black">
      <div className="card-block">
        <div className="card-title">
          <h4 className="ml-5">{title}</h4>
        </div>
        <div className="card-text ml-5">
          {isDone
            ? "This movie has been watched"
            : "This movie has yet to be watched"}
        </div>
        <div className="d-flex justify-content-between align-items-end">
          <button
            className="btn btn-link"
            onClick={() => {
              axios.delete(`/api/todo/${id}`).then(() => {
                history.push("/");
              });
            }}
          >
            Delete
          </button>
          <button className="btn btn-link" onClick={onEdit}>
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default withRouter(SingleTodoList);
