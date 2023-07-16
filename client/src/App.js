import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'jquery/dist/jquery'
import 'jquery-ui/dist/jquery-ui'
import 'jquery-ui-css/jquery-ui'

// 其他引入的組件
import Home from './page/home';
// import About from './page/About';
// import Contact from './page/Contact';
import NotFound from './page/NotFound';
import Product from './page/product';
// import RegisterForm from './components/login/q'
// import Tqqq from './components/login/q';
import RegistrationForm from './components/login/q1';
// import Cart from "./components/cart/index";
// import Navbar2 from './components/Home/navbar2/navbar2';
// import Navbar from './components/Home/navbar/navbar';
import Footer from './components/Home/footer/footer';
import Returnqu from './components/returnqu/returnqu';



const App = () => {
  return (
    <>
      <Router>
        
        <div className='d-flex'>
          {/* <Link className='m-3' to="/">Home</Link> <br />
          <Link className='m-3' to="/product">product</Link><br />
          <Link className='m-3' to="/RegistrationForm">RegistrationForm</Link><br />
          <Link className='m-3' to="/cart">Cart</Link><br />
          <Link className='m-3' to="/tqq">tqq</Link><br />
          <Link className='m-3' to="/Returnqu">Returnqu</Link> */}
        </div>
        
        {/* <Navbar2 /> */}
        {/* <Navbar/> */}
        <Routes>
          <Route path="/" element={<Home />} />
 
          {/* <Route path="/about" element={<About />} /> */}

          <Route path="/product" element={<Product />} />

          {/* <Route path="/tqq" element={<Tqqq />} /> */}

          <Route path="/RegistrationForm" element={<RegistrationForm />} />
          {
          /* <Route path="/cart" element={<Cart />} /> */}
          
          <Route path="/Returnqu" element={<Returnqu />} />
          
          <Route path="*" element={<NotFound />} />
          


        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
