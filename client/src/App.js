// import React from 'react';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
// import 'jquery/dist/jquery'
import 'jquery-ui/dist/jquery-ui'
import 'jquery-ui-css/jquery-ui'

// 其他引入的組件
import Home from './page/home';
// import About from './page/About';
// import Contact from './page/Contact';
import NotFound from './page/NotFound';
import Product from './page/product';
// import RegistrationForm from './components/login/q1';
import ProductItem from './page/product-item';
import ProductSeller from './page/productSeller';
// import Cart from "./components/cart/index";
import Navbar2 from './components/Home/navbar2/navbar2';
import Footer from './components/Home/footer/footer';
import Login from './components/login/login';
import Registration from './components/register/register';
import Up from './components/up/up';
import MemberCenter from './components/PersonalData/Personaldata'

const App = () => {

  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, []);


 

  return (
    <>
      <Router>
        
        {show && <Navbar2 />}
        <Routes>

          <Route path="/RegistrationForm" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/product" element={<Product />} />
          {/* <Route path="/RegistrationForm" element={<RegistrationForm />} /> */}
          {/* <Route path="/cart" element={<Cart />} /> */}
          <Route path='/productItem/:id' element={<ProductItem />} />
          <Route path='/productSeller/:account' element={<ProductSeller />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/up" element={<Up />} />
          <Route path="/member" element={< MemberCenter/>} />
        </Routes>
        {show && <Footer />}
      </Router>
    </>
  );
};

export default App;
