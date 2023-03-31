import React from 'react';
import './web.css';

function Header() {
  return (
    <header>
    <h2 id='title'>SANTHOSH CYCLE MART</h2><br></br>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR_scsEIpT87NlyO5SJCX9TfecVE_tyCJK-ouMhG46TQaUhpGmZ7CpgbeDIQfPO2Y1tao&usqp=CAU" alt="Company logo" id="logo"/><br></br>
      <marquee><h1>OFFER 50% HURRY UP!</h1></marquee>
      <nav class="topnav">
      
          <a href="#">Home</a>
          <a href="#">Products</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        
      </nav>
    </header>
  );
}

export default Header;