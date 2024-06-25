import './App.css';
import React, { useState } from "react";
import { Routes,Route } from 'react-router-dom';
import BookList from './components/BookList';
import BookDetails from './components/BookDetail2s';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Favorites from './components/Favorites';
import Login from './components/Login';
import Register from './components/Register';
import ProtectedRoute from './components/ProtectedRoute';
import Account from './components/Account';

function App(){
  const [token, setToken] = useState(null);
  
  return(
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path = "/" element={<BookList/>} />
        <Route path = "/books" element={<BookDetails/>} />
        <Route path = "/favorites" element={<Favorites />} />
        <Route path = "/login" element={<Login setToken={setToken} token={token} />} />
        <Route path = "/register" element={<Register setToken={setToken} token={token}/>} />
        <Route element={<ProtectedRoute />} > 
          <Route path="/account" element={<Account />} />
        </Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
