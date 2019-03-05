import React from "react";
import { Link } from 'react-router-dom';

const TopNav = ({ title }) => {
  return (
    <div>
      <nav className="navbar navbar-dark bg-dark mb-4 d-flex justify-content-center align-items-center">
        <Link to="/" className="navbar-brand ">{title}</Link>
      </nav>
      <div className="navbar fixed-bottom">
      <Link to="/new" className="btn btn-outline-primary w-100 p-3">Add new movie</Link>
      </div>
    </div>
  );
};

export default TopNav;
