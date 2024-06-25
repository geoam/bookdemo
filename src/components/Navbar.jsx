import React from 'react';
//import { useState } from "react";
import '../App';
import { Link } from "react-router-dom";

const Navbar = ({ products , setProducts /*, productsToDisplay, setProductsToDisplay (all comment: kept for references) */ }) => {
  ////const [products, setProducts] = useState([]);
  const handleSearch = (e) => {

    const filtered = products.filter((item) => 
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
  );
    //console.log(filtered);
    setProducts(filtered);
    //setProductsToDisplay(filtered);
  };


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
              <input type="text" placeholder="Search for items.." onChange={handleSearch}/>
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