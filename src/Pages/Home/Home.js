import React, { useState } from 'react';
import { useEffect } from 'react';
import NavbarCustom from '../../Components/Home/NavbarCustom/NavbarCustom';
import SliderCustom from '../../Components/Home/SliderCustom/SliderCustom';
import Games from '../Games/Games';
import "./Home.css";

const Home = () => {

    const [slides, setSlides] = useState([]);

    useEffect(() => {
        fetch('slides.json')
            .then(res => res.json())
            .then(data => {
                setSlides(data)
            })
    }, [])

    return (
        <div className='home'>
            <div>
                <NavbarCustom />
                <SliderCustom style={{ width: '100%', height: '100vh' }} slideData={slides} />
                <div className="games">
                    <Games isNavbar={false} itemCount={3} />
                </div>
            </div>
            <div id='button-bottom'>
                <button className='button'>See All</button>
            </div>
        </div>
    );
};

export default Home;