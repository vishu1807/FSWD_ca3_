import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Task List</Link></li>
        <li><Link to="/add-task">Add Task</Link></li>
      </ul>
    </nav>
  );
};

export default Navigation;
