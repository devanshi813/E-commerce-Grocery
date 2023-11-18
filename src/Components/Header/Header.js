import React from 'react';
import logo from '../Assets/logo.png.webp';
import "./Header.css";
import { Link } from 'react-router-dom';
import { BsCart3, BsHeartFill } from "react-icons/bs";
import { useSelector } from 'react-redux';

// Logo component
const Logo = () => (
  <div className='Logo'>
    <img src={logo} alt="logo" />
  </div>
);

// Navigation component
const Navigation = () => (
  <div className='navbarItems'>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Shop</a></li>
      <li><a href="#">Pages</a></li>
      <li><a href="#">Blog</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </div>
);

// Header component
function Header () {

  const { list } = useSelector(state => state.cart)

  return (  
  <div className='navbarContainer'>
    <Link to="/"><Logo /></Link>
    <Navigation className="navbarSubcontainer"/>
    <div className='icons'>
      <BsHeartFill className='wish' />
      <Link to="/cart">
          <BsCart3 className='cart' />
          <span>{list?.length}</span>
      </Link>
      <div className='amt'>
        <h4>item: $150</h4>
      </div>
    </div>
  </div>
)}

export default Header;
