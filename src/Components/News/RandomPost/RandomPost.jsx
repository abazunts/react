import React from "react";
import s from "./randompost.module.css";


const random = (news) => {
    let min = 0;
    let max = news.length;
    let rand = min - 0.5 + Math.random() * max;
    rand = Math.round(rand);
    return rand;
}

const RandomPost = (props) => {
    let newsPage = props.newsPage;
    let rand = random(newsPage.news)
    return (
        <div>
            <div className={s.headerPost}>
                <div className={s.avatar}>
                    <img src={newsPage.news[rand].avatar}/>
                </div>
                <div className={s.name}>
                    {newsPage.news[rand].name}
                </div>
                <div className={s.date}>
                    {newsPage.news[rand].nowDate}
                </div>
            </div>
            <div className={s.randomPost}>
                <div className={s.attachmentPhoto}>
                    <img src={newsPage.news[rand].attachmentPhoto}/>
                </div>
                {newsPage.news[rand].attachmentVideo !== "" &&
                <div className={s.attachmentVideo}>
                    <iframe src={newsPage.news[rand].attachmentVideo}/>
                </div>
                }
                <div className={s.message}>
                    {newsPage.news[rand].message}
                </div>
                <div className={s.likeCount}>
                    {newsPage.news[rand].likeCount} likes
                </div>
                <div className={s.commentsCount}>
                    {newsPage.news[rand].commentsCount} comments
                </div>
                <button className={s.like}>Like</button>
                <button className={s.comment}>Comment</button>
            </div>
        </div>
    )
}

export default RandomPost;