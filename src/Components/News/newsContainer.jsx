import React from "react";
import Post from "../Profile/MyPost/Post/Post";
import News from "./news";


const NewsContainer = (props) => {
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
        <News />
    )
}

export default NewsContainer;