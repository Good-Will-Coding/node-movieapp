import React from 'react';

const TopNav = ({ title }) => {
  return (
    <nav className="navbar navbar-dark bg-dark mb-4 d-flex justify-content-center align-items-center">
    <span className="navbar-brand ">{title}</span>
    </nav>
  )
}

export default TopNav;