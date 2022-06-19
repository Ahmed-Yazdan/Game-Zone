import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import Certificate from '../Certificate/Certificate';
import "swiper/css";
import "swiper/css/navigation"
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from 'swiper';
import Aos from "aos";
import "aos/dist/aos.css";

// install Swiper modules
SwiperCore.use([Navigation, Pagination]);


const SliderCustom = () => {

    const [certificates, setCertificates] = useState([]);

    useEffect(() => {
        fetch('./certificates.json')
            .then(res => res.json())
            .then(data => setCertificates(data));
    }, []);

    useEffect(() => {
        Aos.init();
    }, []);

    return (
        <div id='achievements' className='margin-top'>
            <h1 className='mt-5 headings' data-aos="fade-up" data-aos-duration="1000">Achievements</h1>
            <Swiper navigation={true} loop={true} pagination={{ "clickable": true }} className="mySwiper" data-aos="fade-right" data-aos-duration="2000">
                {
                    certificates.map(certificate => <SwiperSlide><Certificate certificate={certificate} key={certificate.id}></Certificate></SwiperSlide>)
                }
            </Swiper>
        </div >
    );
};

export default SliderCustom;