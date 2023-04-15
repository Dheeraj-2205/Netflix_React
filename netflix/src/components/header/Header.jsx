import React from 'react'
import logo from "../../Images/logo.png";
import "../Home.scss"
import { Link } from 'react-router-dom';
import {ImSearch} from 'react-icons/im'
const Header = () => {
  return (
    <nav className='header'>
        <img src={logo} alt="" />
        <div>
            <Link to = "/tvshows">TV Shows</Link>
            <Link to = "/tvshows">TV Shows</Link>
            <Link to = "/tvshows">TV Shows</Link>
            <Link to = "/tvshows">TV Shows</Link>
        </div>
        <ImSearch/>
    </nav>   
  )
}

export default Header