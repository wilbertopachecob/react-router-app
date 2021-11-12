import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div className="card" style={{width: '18rem'}}>
      <ul className="list-group list-group-flush">
        <li className="list-group-item">
          <Link to="/admin/posts">Posts</Link>
        </li>
        <li className="list-group-item">
          <Link to="/admin/users">Users</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
