import React from 'react';
import '../styles/common.css'
import sender from '../icons/profile.jpg'
import cat from '../icons/cat.jpg'
import like from '../icons/like.png'
import comment from '../icons/comment.png'
import share from '../icons/share.png'

const Post = (props) => {
    return (
        <div className="post">
            <div className="sender">
                <img className="sender-photo" src={sender}/>
                <div className="sender-info">
                    <div className="sender-name">{props.name ? props.name : "Daniyar Myrzasary"}</div>
                    <div className="sending-time">{props.time ? props.time : "Вчера в 16:45"}</div>
                </div>
            </div>
            <div className="content-text">{props.text ? props.text : "Заниматься жизни откуда упрекнуть некое избегал когда которое кто откуда порицающих жизни мог, немалое такие из-за предаваться только, возникает презирает поняли. Простейшим всю если картину иной из-за заниматься — превратное представление иной страдания тех превратное нас открывший боль тягостными, за как справедливости, некое счастливой никого но. Кто боль некоей великие превратное действительно нет, отвергает чтобы из-за никакого такого если открывший кто, назвал вами собой постигают, я, предпочел, какими возникает, как. Ни но, умеет, такого некоей презирает отвергает никого ни представление: презирает, лишь. Равно, возжаждал иной физическими говорил жизни физическими — воспользоваться, примером то равно."}</div>
            <img className="content-photo" src={props.photo ? props.photo : cat}/>
            <div className="like-comment-share">
                <div className="lcs"><img className="icon-lcs" src={like}/></div>
                <div className="lcs"><img className="icon-lcs" src={comment}/></div>
                <div className="lcs"><img className="icon-lcs" src={share}/></div>
            </div>
        </div>
    );
};

export default Post;