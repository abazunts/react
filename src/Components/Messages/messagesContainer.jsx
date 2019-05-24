import React from "react";
import {setMessage, setNewMessageText} from "../../redux/dialogs-reducer";
import Messages from "./messages";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
};

const MessagesContainer = connect(mapStateToProps, {setMessage, setNewMessageText})(Messages)


export default MessagesContainer;