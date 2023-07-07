import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'jquery/dist/jquery'
import 'jquery-ui/dist/jquery-ui'
import 'jquery-ui-css/jquery-ui'

// 其他引入的組件
// import Home from './page/Home';
// import About from './page/About';
// import Contact from './page/Contact';
import NotFound from './page/NotFound';
import Product from './page/product';
import RegistrationForm from './page/register';
import Cart from "./components/cart/index";
import Login from "./components/login/login";


const App = () => {
  return (
    <>
      <Router>
        <div className='d-flex'>
        <Link className='m-3' to="/">Home</Link> <br />
        <Link className='m-3' to="/product">product</Link><br/>
        <Link className='m-3' to="/login">登入</Link><br/>
        <Link className='m-3' to="/RegistrationForm">註冊</Link><br/>
        <Link className='m-3' to="/cart">Cart</Link><br/>
       
        </div>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/product" element={<Product />} />
          <Route path="/RegistrationForm" element={<RegistrationForm />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login />}  />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
