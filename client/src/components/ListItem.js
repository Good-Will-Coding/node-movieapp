import React from "react";
import { Link } from 'react-router-dom';

const ListItem = ({ title, isDone, id }) => {
  return (
    <Link to={`/${id}`} className="list-group-item mt-3 d-flex justify-content-center align-items-center">
      {title} 
    </Link>
  );
};

export default ListItem;
