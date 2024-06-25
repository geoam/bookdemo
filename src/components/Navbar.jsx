import React from 'react';
import '../App';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
        <div>
        <h1>
            ReactStore</h1>
          
        </div>
        <div>
            <Link to = "*">
            <h3>Home</h3>
            </Link></div>
            <div>
            <Link to = "/favorites">
            <h3>Your Favorites</h3>
            </Link></div>
            <div>
              <input type="text" placeholder="Search for items.." />
              </div>
              <div>
            <Link to = "/Register">
            <h3>Register</h3>
            </Link></div><div>
            <Link to = "/Login">
            <h3>Login</h3>
            </Link>
        </div>
    </div>
  );
};

export default Navbar