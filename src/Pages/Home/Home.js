import React from 'react';
import NavbarCustom from '../../Components/Home/NavbarCustom/NavbarCustom';
import SliderCustom from '../../Components/Home/SliderCustom/SliderCustom';
import Games from '../Games/Games';
import "./Home.css";

const Home = () => {
    return (
        <div className='home'>
            <NavbarCustom/>
            <SliderCustom/>
        </div>
    );
};

export default Home;