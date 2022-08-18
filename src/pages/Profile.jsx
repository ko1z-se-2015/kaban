import React from 'react';
import '../styles/profile-styles.css'
import profile from "../icons/user.png";
import news from "../icons/news.png";
import message from "../icons/messenger.png";
import friends from "../icons/friends.png";
import options from "../icons/settings.png";
import logOut from "../icons/logout.png";
import {Link} from "react-router-dom";
import userPhoto from '../icons/profile.jpg'
import friendPhoto from '../icons/photo-friend.jpg'
const Profile = () => {
    return (
        <div className="profile">
             <div className="profile-content">
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
                 <div className="user-content">
                     <div className="col-1">
                         <div className="user-photo">
                             <img  src={userPhoto}/>
                             <div className="change-photo">Изменить фотографию</div>
                         </div>
                         <div className="user-friends">
                              <div className="user-friends-text">Друзья</div>
                              <div className="friends">
                                  <div className="friend">
                                      <img className="friend-photo" src={friendPhoto}/>
                                      <div className="friend-name">Амер</div>
                                  </div>
                                  <div className="friend">
                                      <img className="friend-photo" src={friendPhoto}/>
                                      <div className="friend-name">Еля</div>
                                  </div>
                                  <div className="friend">
                                      <img className="friend-photo" src={friendPhoto}/>
                                      <div className="friend-name">Талыч</div>
                                  </div>
                                  <div className="friend">
                                      <img className="friend-photo" src={friendPhoto}/>
                                      <div className="friend-name">Кана</div>
                                  </div>
                                  <div className="friend">
                                      <img className="friend-photo" src={friendPhoto}/>
                                      <div className="friend-name">Тана</div>
                                  </div>
                                  <div className="friend">
                                      <img className="friend-photo" src={friendPhoto}/>
                                      <div className="friend-name">Серик</div>
                                  </div>
                              </div>
                         </div>
                     </div>
                     <div className="col-2">
                         <div className="user-info">

                         </div>
                         <div className="user-posts">

                         </div>
                     </div>
                 </div>
             </div>
        </div>
    );
};

export default Profile;