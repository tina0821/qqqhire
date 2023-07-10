import React from 'react';
import NavbarShare from '../components/Home/navbar_share/navbar_share';
import Navbar from '../components/Home/navbar/navbar';
import Outdoor from '../components/Home/outdoor/outdoor';
import Outdoor2 from '../components/Home/outdoor2/outdoor2';
import Outdoor3 from '../components/Home/outdoor3/outdoor3';
import Outdoor4 from '../components/Home/outdoor4/outdoor4';
import Footer from '../components/Home/footer/footer';

const Home = () => {
    return (
        <>
        <NavbarShare/>
        <Outdoor/>
        <Outdoor2/>
        <Outdoor3/>
        <Outdoor4/>
        <Footer/>
        </>
    );
};

export default Home;