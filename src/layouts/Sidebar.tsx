import React from "react";
import { NavLink } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <aside
      style={{
        width: "220px",
        height: "100vh",  
        background: "#f4f4f4",
        borderRight: "1px solid #ddd",
        padding: "20px",
        position: "sticky",
        top: 0
      }}
    >
      <h2  style={{ marginBottom: "20px" }}>Dashboard</h2>
 
      <nav>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li>
            <NavLink  to="/users">Users</NavLink>
          </li>
          <li>
            <NavLink to="/analytics">Analytics</NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
