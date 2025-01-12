import React, { useState, useEffect } from 'react';
import './MegaMenu.css'; // Import your existing stylesheet

export const MegaMenu = () => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('header');
      const stickyOffset = header.offsetTop;
      setIsSticky(window.pageYOffset > stickyOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="header" className={`sticky ${isSticky ? 'fixed shrink' : ''}`}>
      <div className="navbar">
        <div className="first-row">
          {/* Logo */}
          <a className="logo" href="#home">
            <img alt="Logo" src="/images/same-day-appalince-repair-logo-2.webp" />
          </a>

          {/* Home Dropdown */}
          <div className="dropdown">
            <button className="dropbtn">Home</button>
            <div className="dropdown-content">
              <h3 style={{ color: '#fff' }}>Home Appliances We Repair</h3>
              <div className="transparent"></div>
              <div className="row">
                <div className="column">
                  <a href="#"><img src="/svg/fridge.svg" alt="" /> Refrigerator</a>
                  <a href="#"><img src="/svg/freezer.svg" alt="" /> Freezer</a>
                  <a href="#"><img src="/svg/dishwasher.svg" alt="" /> Dishwasher</a>
                  <a href="#"><img src="/svg/dryer.svg" alt="" /> Dryer</a>
                  <a href="#"><img src="/svg/oven.svg" alt="" /> Oven</a>
                </div>
                <div className="column">
                  <a href="#">Microwave</a>
                  <a href="#">Cooktop</a>
                  <a href="#">Range Hood</a>
                  <a href="#">Ice Machine</a>
                  <a href="#">Slushie Machine</a>
                </div>
                <div className="column">
                  <a href="#">Walk-in Cooler</a>
                  <a href="#">Walk-in Freezer</a>
                  <a href="#">Showcase Refrigerator</a>
                </div>
              </div>
            </div>
          </div>

          {/* Other Dropdowns */}
          <div className="dropdown">
            <button className="dropbtn">Commercial</button>
            <div className="dropdown-content">
              <h3 style={{ color: '#fff' }}>Commercial Appliances We Repair</h3>
              <hr />
              <div className="transparent"></div>
              <div className="row">
                <div className="column">
                  <a href="#"><img src="/svg/fridge.svg" alt="" /> Refrigerator</a>
                  <a href="#"><img src="/svg/freezer.svg" alt="" /> Freezer</a>
                  <a href="#"><img src="/svg/dishwasher.svg" alt="" /> Dishwasher</a>
                  <a href="#"><img src="/svg/dryer.svg" alt="" /> Dryer</a>
                  <a href="#"><img src="/svg/oven.svg" alt="" /> Oven</a>
                </div>
                <div className="column">
                  <a href="#">Microwave</a>
                  <a href="#">Cooktop</a>
                  <a href="#">Range Hood</a>
                  <a href="#">Ice Machine</a>
                  <a href="#">Slushie Machine</a>
                </div>
                <div className="column">
                  <a href="#">Walk-in Cooler</a>
                  <a href="#">Walk-in Freezer</a>
                  <a href="#">Showcase Refrigerator</a>
                </div>
              </div>
            </div>
          </div>

          {/* Add other dropdowns similarly */}
          {/* ... */}

          <a href="#top" className="phone-number">(323) 870-4790</a>
        </div>
      </div>
    </div>
  );
};

export default MegaMenu;
