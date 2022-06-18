import React, { useState } from 'react';
import "./NavbarCustom.css";

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
        console.log(count);
    }

    return (
        <div className='nav'>
            <label className='logo'>Game Zone</label>
            <ul id="yourMom">
                <li><a href="#" className='active'>Home</a></li>
                <li><a href="#">Games</a></li>
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Login</a></li>
            </ul>
            <label onClick={handleIcon} id='icon'>
                <i className='fas fa-bars'></i>
            </label>
        </div>
    );
};

export default NavbarCustom;