import React from 'react';
import Navbar from '../components/Home/navbar/navbar';
import Footer from '../components/Home/footer/footer';
import Outdoor from '../components/Home/outdoor/outdoor';


const Home = () => {
    return (
        <>
        <Navbar/>
        <Outdoor/>
        <Footer/>
        </>
    );
};

export default Home;