import React, { useState } from 'react';
import "./NavbarCustom.css";
import { Link } from "react-router-dom";

const NavbarCustom = () => {
    
    let count = 0;

    const handleIcon = () => {
        if(count%2 == 0){
            document.getElementById("yourMom").style.left="0";
            count++
        }
        else{
            document.getElementById("yourMom").style.left="-100%";
            count++
        };
    }

    return (
        <div className='nav'>
            <label className='logo'>Game Zone</label>
            <ul id="yourMom">
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/games">Games</Link></li>
                <li><Link to="/purchase">Purchase</Link></li>
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">About</a></li>
                <li><Link to="/login">Login</Link></li>
            </ul>
            <label onClick={handleIcon} id='icon'>
                <i className='fas fa-bars'></i>
            </label>
        </div>
    );
};

export default NavbarCustom;