import React from 'react';
import '../styles/home-style.css'
import profile from '../icons/user.png'
import news from '../icons/news.png'
import options from '../icons/settings.png'
import friends from '../icons/friends.png'
import logOut from '../icons/logout.png'
import message from '../icons/messenger.png'
import Post from "../components/Post";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className="home">
            <div className="home-content">
                <div className="links">
                    <ul className="list-links">
                        <li ><Link className="link" to="/profile"><img className="icon-link" src={profile}/>Мой профиль</Link></li>
                        <li ><Link className="link" to="/"><img className="icon-link" src={news}/>Новости</Link></li>
                        <li className="link"><img className="icon-link" src={message}/> Сообщения</li>
                        <li className="link"><img className="icon-link" src={friends}/> Мои друзья</li>
                        <li className="link"><img className="icon-link" src={options}/> Настройки</li>
                        <li className="link"><img className="icon-link" src={logOut}/> Выйти</li>
                    </ul>
                </div>
                <div className="posts">
                <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                </div>
            </div>
        </div>
    );
};

export default Home;