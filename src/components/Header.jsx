import React from 'react';
import '../styles/Header.css'
import {Link} from "react-router-dom";

const Header = (props) => {
    return (
        <div className="header">

                <Link to='/' className='home'>Кабан</Link>
                <div className="log-reg">
                    <Link className="reg" to='/auth' state={{isReg:true}}>Регистрация</Link>
                    <Link className="log" to='/auth' state={{isReg:false}}>Войти</Link>
                </div>


        </div>
    );
};

export default Header;