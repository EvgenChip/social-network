import { rerenderEntireTree } from "../render";

let state = {
    profilePage: {
        postsData: [
            { id: 1, message: 'Hi', like: 15 },
            { id: 2, message: 'Hi are your', like: 1 },
            { id: 3, message: 'Fanks', like: 3 },

        ],
        newPostText: 'it-kama'
    },
    messagePage : {
        dialogsData: [
            { id: 1, name: 'Дима' },
            { id: 2, name: 'Тошик' },
            { id: 3, name: 'Дошик' },
            { id: 4, name: 'Ашик' },
            { id: 5, name: 'Машик' },
        ],
        messagesData: [
            { id: 1, message: 'Hi' },
            { id: 2, message: 'Как дела?' },
            { id: 3, message: 'Давай до свиданья' },

        ]

    },
    sitebar: {},


}

export let addPost = (postMessage) => {
    let newPost = {
        id:5,
        message: postMessage,
        like:0,
    }
    
        state.profilePage.postsData.push(newPost);
        rerenderEntireTree(state);

}

export let updateNewPostText = (newText) =>{
    state.profilePage.newPostText = newText;
    
    
}

export default state