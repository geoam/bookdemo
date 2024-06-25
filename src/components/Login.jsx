
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../App.css';

function Login({ token, setToken }) {
  const navigate = useNavigate();
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // 2. Create a function to handle the form submission - THIS IS WHERE WE SEND THE LOGIN DATA
  // TO THE API
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://fakestoreapi.com/auth/login", {
        username,
        password })
      .then((res) => { 
        console.log(res);
        setToken(res.data.token);
        localStorage.setItem("token", res.data.token);
        navigate("../");
        /*   if (res.data.token) {
          setToken(res.data.token);
          localStorage.setItem("token", res.data.token);
          navigate("/");
          }  */ 
        })
      .catch((err) => console.log(err));
  };

   if (token) {
    navigate("/");
  } 

  return (
    <div>
      {/**Add an onSubmit handler to the form, which calls the function we created in step 2 */}
      <form onSubmit={handleSubmit} className="login-form">
        <h1>Login here</h1>
        
        <label>
          Username:
          <input 
            type="text" 
            name="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          /></label>
        
        <label>
          Password:
          <input
            type="text"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        {/**1. Add a button to submit the form - DONE*/}
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Login;
