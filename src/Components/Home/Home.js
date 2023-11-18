import React, { useState } from 'react'
import Main from '../Assets/main.jpg';
import './Home.css'

function Sidebar() {

    const[isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className='navbar'>
            <button className='toggle-button' onClick={toggleNavbar}>All departments</button>
            <div className={`navbar-content ${isOpen ? 'open' : ''}`}>
                <ul className='navbar-ul'>
                    <li><a href="#fresh-meat">Fresh Meat</a></li>
                    <li><a href="#vegetables">Vegetables</a></li>
                    <li><a href="#fruit-nut-gifts">Fruit & Nut Gifts</a></li>
                    <li><a href="#fresh-berries">Fresh Berries</a></li>
                    <li><a href="#ocean-foods">Ocean Foods</a></li>
                    <li><a href="#butter-eggs">Butter & Eggs</a></li>
                    <li><a href="#fastfood">Fastfood</a></li>
                    <li><a href="#fresh-onion">Fresh Onion</a></li>
                    <li><a href="#papayaya-crisps">Papayaya & Crisps</a></li>
                    <li><a href="#oatmealag">Oatmealag</a></li>
                    <li><a href="#fresh-bananas">Fresh Bananas</a></li>
                </ul>
            </div>
        </div>
    )
}

function Searchbar() {
    return (
        <div className='search-bar'>
          <div className='search_categories'>
            <span>All Categories</span>
          </div>
          <input type='text' placeholder='|       What do you need?' />
          <button type='submit' className='search-btn'>
            SEARCH
          </button>
        </div>
      );
}

function Support() {
    return (
        <div className='support-grid'>
           <div className='sub-support-grid'>
                <h4>+65 11.188.888</h4>
                <p>support 24/7 time</p>
           </div>
        </div>
    )
}

function Mainhome() {
    return (
      <div className="my-container" style={{ backgroundImage: `url(${Main})` }}>
        <div className="my-text">
            <h6>FRUIT FRESH</h6>
            <h1>Vegetable <br/> 100% Organic</h1>
            <p>Free Pickup and Delivery Available</p>
            <button>SHOP NOW</button>
          </div>
      </div>
    )
}

function Home() {
  return (
    <div className="home-container">
      <div className="sidebar-container">
        <Sidebar />
      </div>
      <div className="content-container">
        <div className="content-row">
          <Searchbar />
          <Support />
        </div>
        <div className="mainhome-row">
          <Mainhome />
        </div>
      </div>
    </div>


  )
}

export default Home
