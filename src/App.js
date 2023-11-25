import React from 'react';
import { BrowserRouter as Router, Route, Routes,Navigate,Outlet} from "react-router-dom";
import './App.css';
import CartContextProvider from './Components/CartContext';
import Cart from './Components/Cart';
import Login from './Components/Login';
import Buynow from './Components/Buynow';
import Products from './Components/Products';
import Navbar from './Components/Navbar';

const Error = (props) => {
  return (
    <div>
      <div style={{ textAlign:'center' }}>
        <i
          className="fa fa-ban"
          aria-hidden="true"
          style={{ fontSize: "100px",color:'red' }}
        ></i>
        <br />
        <br />
        <h2>This Page Is Under Maintainance</h2>
      </div>
    </div>
  );
};

const ProtectedRoute = () => {
  let token = localStorage.getItem("user");
  return token ? <Outlet /> : <Navigate to="/" />;
};

function App() {
  return (
    <CartContextProvider>
    <Router basename='/shopping-app'>
    <Navbar/>
    <Routes>
      <Route exact path="/" element={<Products/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route element={<ProtectedRoute />}>
        <Route exact path="/cart" element={<Cart/>} />
        <Route exact path="/buynow" element={<Buynow/>} />
      </Route>
      <Route exact path="/*" element={<Error />} />
    </Routes>
    </Router>
    </CartContextProvider>
  );
}

export default App