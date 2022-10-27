import { getProfileUsers } from '../api/api'

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET-USER-PROFILE'

let initialState = {
    postsData: [
        { id: 1, message: 'Hi', like: 15 },
        { id: 2, message: 'Hi are your', like: 1 },
        { id: 3, message: 'Fanks', like: 3 },

    ],
    newPostText: 'it-kama',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                like: 0,
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost],
                newPostText: '',
            }

        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            }

        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        default:
            return state

    }


}
export const addPostActionCreator = () => ({ type: ADD_POST })


export const updateNewPostTextActionCreator = (text) =>
({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
})

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })


export const getProfileUsersThunk = (userId) => (dispatch) => {
    getProfileUsers(userId).then(response => { dispatch(setUserProfile(response.data)) })
}

export default profileReducer;



