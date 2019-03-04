import React from "react";

const ListItem = ({ title, isDone }) => {
  return (
    <li className="list-group-item mt-3 d-flex justify-content-center align-items-center">
      {title} {isDone ? "Done" : "Not done"}
    </li>
  );
};

export default ListItem;
