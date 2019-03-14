import React from "react";
import AddPost from "../Profile/MyPost/AddPost";
import s from "../News/news.module.css";
import Friends from "../Friends/friends";
import Post from "../Profile/MyPost/Post/Post";


const News = (props) => {
    let profilePage = props.profilePage;
    let dispatch = props.dispatch;
    let friendPage = props.friendPage;
    let newsPage = props.newsPage;

    let newsElement = newsPage.news.map(p => <Post message={p.message} id={p.id} nowDate={p.nowDate}
                                                   like={p.likeCount} comments={p.commentsCount}
                                                   share={p.shareCount} myName={p.name}
                                                   avatar={p.avatar}
                                                   rePostTo={p.rePostTo}
                                                   attachmentVideo={p.attachmentVideo}
                                                   attachmentPhoto={p.attachmentPhoto}
                                                   dispatch={props.dispatch}
                                                   profilePage={props.profilePage}
    />)

    return (
        <div className={s.news}>
            <div className={s.addPost}>
                <AddPost newsPage={newsPage} dispatch={dispatch}/>
            </div>
            <div className={s.gridRight}>
                <Friends friendPage={props.friendPage}/>
            </div>
            <div className={s.newsPost}>
                {newsElement.reverse()}
            </div>
        </div>
    )
}

export default News;