import React from "react";
import { Link, NavLink } from "react-router-dom";
import profileImg from '../../assets/profile.svg';
import './Header.scss';

const Header =()=>{
return(
    <header>
        <h1>Notes</h1>
        <nav className="navContainer">
        <NavLink to="/notes" className="selected">Notes</NavLink>
        <NavLink to="/category">Categories</NavLink>
        </nav>

        {/* </div> */}

        <Link to='/profile'><img src={profileImg} alt="Profile Icon" /></Link>
    </header>
)
}

export default Header;