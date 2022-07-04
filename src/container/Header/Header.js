import React from "react";
import { Link } from "react-router-dom";
import profileImg from '../../assets/profile.svg';
import './Header.scss';

const Header =()=>{
return(
    <header>
        <h1>Notes</h1>
        
        <Link to='/profile'><img src={profileImg} alt="Profile Icon" /></Link>
    </header>
)
}

export default Header;