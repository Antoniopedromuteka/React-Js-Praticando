
import React from 'react';
import './css/Header.css';

const Header = ()=>{

    return(
      <header className='header'>
          <div className='header-menu'>
          <div className='logo'>D-line Code</div>
          <div className='menu'>
              <ul>
                  <li>Home</li>
                  <li>Contact</li>
                  <li>Sobre</li>
              </ul>
              
          </div>
        </div>
      </header>
    );

}



export default Header;