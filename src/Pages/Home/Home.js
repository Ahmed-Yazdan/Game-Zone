import React from 'react';
import NavbarCustom from '../../Components/Home/NavbarCustom/NavbarCustom';
import Games from '../Games/Games';
import "./Home.css";

const Home = () => {
    return (
        <div className='home'>
            <NavbarCustom/>  
            This is home
        </div>
    );
};

export default Home;