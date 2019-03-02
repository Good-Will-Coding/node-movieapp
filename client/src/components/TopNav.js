import React from 'react';

const TopNav = ({ title }) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
    <span className="navbar-brand">{title}</span>
    </nav>
  )
}

export default TopNav;