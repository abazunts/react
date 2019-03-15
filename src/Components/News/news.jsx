import React from "react";
import AddPost from "../Profile/MyPost/AddPost";
import s from "../News/news.module.css";
import Post from "../Profile/MyPost/Post/Post";
import RFriends from "./Recomended/RFriends";


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
                                                   news={newsPage.news}
                                                   commentsMessage={newsPage.comments}
                                                   dispatch={props.dispatch}
                                                   profilePage={props.profilePage}
    />)

    let postElement = profilePage.posts.map(p => <Post message={p.message} id={p.id} nowDate={p.nowDate}
                                                   like={p.likeCount} comments={p.commentsCount}
                                                   share={p.shareCount} myName={p.name}
                                                   avatar={p.avatar}
                                                   rePostTo={p.rePostTo}
                                                       myName={p.myName}
                                                   attachmentVideo={p.attachmentVideo}
                                                   attachmentPhoto={p.attachmentPhoto}
                                                   news={newsPage.news}
                                                   commentsMessage={newsPage.comments}
                                                   dispatch={props.dispatch}
                                                   profilePage={props.profilePage}
    />)

    Array.prototype.push.apply(newsElement,postElement)

    return (
        <div className={s.news}>
            <div className={s.addPost}>
                <AddPost newsPage={newsPage} dispatch={dispatch}/>
            </div>
            <div className={s.gridRight}>
                {/*<Friends friendPage={props.friendPage}/>*/}
                <RFriends rFriends={newsPage.rFriends}/>
            </div>
            <div className={s.mainGridPost}>
                {newsElement.reverse()}
            </div>
        </div>
    )
}

export default News;