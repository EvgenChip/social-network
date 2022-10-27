import React from "react"
import ReactDOM from "react-dom/client"
import dialogsReducer from "./dialogs-reducer"
import profileReducer from "./profile-reducer"
import sitebarReducer from "./sitebar-reducer"
import usersReducer from "./users-reducer"

const SEND_MESSAGE = "SEND-MESSAGE"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT"
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT"
const ADD_POST = "ADD-POST"
let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, message: "Hi", like: 15 },
                { id: 2, message: "Hi are your", like: 1 },
                { id: 3, message: "Fanks", like: 3 },
            ],
            newPostText: "it-kama",
        },
        messagePage: {
            dialogsData: [
                { id: 1, name: "Дима" },
                { id: 2, name: "Тошик" },
                { id: 3, name: "Дошик" },
                { id: 4, name: "Ашик" },
                { id: 5, name: "Машик" },
            ],
            messagesData: [
                { id: 1, message: "Hi" },
                { id: 2, message: "Как дела?" },
                { id: 3, message: "Давай до свиданья" },
            ],

            newMessageText: "",
        },
        usersData: {
            users: [

            ],
        },
        sitebar: {},
    },
    _rerenderEntireTree() {
        console.log("State is changeed")
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._rerenderEntireTree = observer
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagePage = dialogsReducer(this._state.messagePage, action)
        this._state.usersData = usersReducer(this._state.usersData, action)
        this._state.sitebar = sitebarReducer(this._state.sitebar, action)
        this._rerenderEntireTree(this._state)
    },
}

export default store
