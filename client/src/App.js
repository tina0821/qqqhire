// import React from 'react';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
// import 'bootstrap/dist/css/bootstrap.css';
import 'jquery/dist/jquery'
import 'jquery-ui/dist/jquery-ui'
import 'jquery-ui-css/jquery-ui'

// 其他引入的組件
import Home from './page/home';
import NotFound from './page/NotFound';
import Product from './page/product';
import ProductItem from './page/productItem';
import ProductSeller from './page/productSeller';
import Aboutus from './page/aboutus';
import Order from './page/order';
import Cmmgmt from './page/cmmgmt';
import Profastup from './page/profastup';
import Proedit from './page/proedit';
import Cart from "./components/cart/index";
import Navbar2 from './components/Home/navbar2/navbar2';
import Footer from './components/Home/footer/footer';
import Login from './components/login/login';
import RegistrationForm from './page/register';
import Up from './components/up/up';
import MemberCenter from './components/PersonalData/Personaldata'
import Love from './page/love'

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
        {/* <Navbar2 /> */}
        <Routes>

          <Route path="/RegistrationForm" element={<RegistrationForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path='/productItem/:id' element={<ProductItem />} />
          <Route path='/productSeller/:account' element={<ProductSeller />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/order" element={<Order />} />
          <Route path="/cmmgmt" element={<Cmmgmt />} />
          <Route path="/profastup" element={<Profastup />} />
          <Route path="/proedit" element={<Proedit />} />
          <Route path="/up" element={<Up />} />
          <Route path="/member" element={< MemberCenter />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/up" element={<Up />} />
          <Route path="/member" element={< MemberCenter />} />
          <Route path="/love" element={< Love />} />
        </Routes>
        {show && <Footer />}
        {/* <Footer /> */}
      </Router>
    </>
  );
};

export default App;
