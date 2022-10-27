const SEND_MESSAGE = "SEND-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";
let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let newMessage = {
        id: 4,
        message: state.newMessageText,
      };
      return {
        ...state,
        newMessageText: "",
        messagesData: [...state.messagesData, newMessage],
      };
    }
    case UPDATE_NEW_MESSAGE_TEXT: {
      return {
        ...state,
        newMessageText: action.newText,
      };
    }
    default:
      return state;
  }
};

export const updateNewMessageTextCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE_TEXT,
  newText: text,
});

export const sendMessageCreator = () => ({
  type: SEND_MESSAGE,
});

export default dialogsReducer;
