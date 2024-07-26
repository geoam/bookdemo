import axios from 'axios';
import { useEffect, useState } from "react";
import './App.css';
import Home from "./components/Home";
import ProductDetails from "./components/ProductDetails";
import { Routes, Route } from "react-router-dom";
import Favorites from './components/Favorites';
import Cart from './components/Cart';
import Login from './components/Login';
import UserLogin from './components/UserLogin';
import Register from './components/Register';
import ProtectedRoute from './components/ProtectedRoute';
import Account from './components/Account';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  const [token, setToken] = useState(null);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  
  
  useEffect(() => {
    axios("https://fakestoreapi.com/products")
      .then((response) => {
        console.log(response.data);
        setProducts(response.data);
      })
      .catch((err) => console.log(err));
    
  }, []);

  return (
    <div className="App">
      <Navbar products={products} setProducts={setProducts} /> 
     
        <Routes>

          <Route path="/" element={<Home products={products}/>}/>
          <Route path="/product/details/:id" element={<ProductDetails />} />
          <Route path="*" element={<Home products={products} />} />
          <Route path = "/favorites" element={<Favorites />} />
          <Route path = "/cart" element={<Cart token={token} cart={cart} setCart={setCart}/>} />
          <Route path = "/login" element={<Login setToken={setToken} token={token} />} />
          <Route path = "/userlogin" element={<UserLogin setToken={setToken} token={token} />} />
          <Route path="/register" element={<Register setToken={setToken} token={token} />} />
          
          <Route element={<ProtectedRoute />} > 
            <Route path="/account" element={<Account />} />
          </Route>
        
        </Routes>
      
      
      <Footer/>
    </div>
  );
}
export default App;
