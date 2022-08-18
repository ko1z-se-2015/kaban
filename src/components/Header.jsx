import React from 'react';
import '../styles/header-style.css'
import boar from '../icons/boar.png'
const Header = () => {
    return (
        <header>
            <div className="header-content">
                <div className="logo">
                    <img className="icon" src={boar}/>
                    <div className="logo-text">ВКАБАН</div>
                </div>

                <img className="icon profile-icon" src={require('../icons/profile.jpg')}/>
            </div>
        </header>
    );
};

export default Header;