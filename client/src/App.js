import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

// 其他引入的組件
// import Home from './page/Home';
// import About from './page/About';
// import Contact from './page/Contact';
import NotFound from './page/NotFound';
import Product from './page/product';
import RegisterForm from './components/login/q'
// import Tqqq from './components/login/q';
import RegistrationForm from './components/login/q1';


const App = () => {
  return (
    <>
      <Router>
        <Link to="/">Home</Link> <br />
        <Link to="/product">product</Link><br/>
        <Link to="/RegistrationForm">RegistrationForm</Link><br/>
        <Link to="/tqq">tqq</Link>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/product" element={<Product />} />
          <Route path="/" element={<RegisterForm />} />
          {/* <Route path="/tqq" element={<Tqqq />} /> */}
          <Route path="/RegistrationForm" element={<RegistrationForm />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
