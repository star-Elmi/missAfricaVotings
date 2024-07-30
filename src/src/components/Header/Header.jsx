import React from 'react'
// import logo from '../logo-black.png';
import './header.scss';
import { Link } from 'react-router-dom';
import logo from './logo.png';

export const Header = () => {
  return (
      <div>
        <div className='img'> <Link to="Home"> <img src={logo} alt="" /></Link></div>
          <div className="header">
                {/* <div><a href="#"><img src={logo} alt="" /></a></div>
              <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Our Gallery</a></li>
                  <li><a href="">Miss SOM App</a></li>
                  <li><a href="">Contact</a></li>
              </ul> */}
              
              <ul>
                <li><Link to="Home">Home</Link></li>
                <li><Link to="OurGellery">OurGellery</Link></li>
                <li><Link to="Contact">Contact</Link></li>
              </ul>
     
          </div>
    </div>
  )
}
