import React from "react";
import News from "./news";
import {addLikeNewsActionCreator, addNewsActionCreator, updateNewNewsTextActionCreator} from "../../redux/news-reducer";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        newsPage: state.newsPage
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addLikeNews: (id) => {
            dispatch(addLikeNewsActionCreator(id))
        },
        addNews: () => {
            dispatch(addNewsActionCreator())
        },
        onNewsChange: (text) => {
            dispatch(updateNewNewsTextActionCreator(text))
        }
    }
}

const NewsContainer = connect(mapStateToProps, mapDispatchToProps )(News)

export default NewsContainer;