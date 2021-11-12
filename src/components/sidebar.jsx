import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="card" style={{width: '18rem'}}>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <NavLink to="/admin/posts">Posts</NavLink>
        </li>
        <li className="list-group-item">
          <NavLink to="/admin/users">Users</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
