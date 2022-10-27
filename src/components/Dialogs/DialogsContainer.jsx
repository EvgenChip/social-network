import React from "react"
import {
    sendMessageCreator,
    updateNewMessageTextCreator,
} from "../../redux/dialogs-reducer"
import Dialogs from "./Dialogs"
import { connect } from "react-redux"
import { Navigate } from 'react-router-dom'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

let mapStateToProps = (state) => {
    return {
        messagePage: state.messagePage,

    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageTextCreator: (text) => {
            dispatch(updateNewMessageTextCreator(text))
        },
        sendMessageCreator: () => {
            dispatch(sendMessageCreator())
        },
    }
}


export default compose(connect(mapStateToProps, mapDispatchToProps)
    , withAuthRedirect)(Dialogs)
