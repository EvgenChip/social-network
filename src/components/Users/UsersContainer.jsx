import React from "react"

import { connect } from "react-redux"
import {
    follow,
    unfollow,

    setCurrentPage,

    toggleIsFollowingProgress,
    getUsersThunkCreator

} from "../../redux/users-reducer"

import Users from './Users'
import Preloader from '../common/Preloader'
import { getUsers } from '../../api/api'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)

    }
    onePageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        console.log(this.props)
        return <>
            {this.props.isFetching ?
                <Preloader /> : null}
            <Users totalUserCount={this.props.totalUserCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onePageChanged={this.onePageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                followingInProgress={this.props.followingInProgress}
            />

        </>
    }
}

let mapStateToProps = (state) => {
    console.log(state)
    return {
        users: state.usersData.users,
        pageSize: state.usersData.pageSize,
        totalUserCount: state.usersData.totalUserCount,
        currentPage: state.usersData.currentPage,
        isFetching: state.usersData.isFetching,
        followingInProgress: state.usersData.followingInProgress

    }
}




export default compose(connect(mapStateToProps,
    {
        follow,
        unfollow,
        setCurrentPage,
        toggleIsFollowingProgress,
        getUsers: getUsersThunkCreator
    }), withAuthRedirect)(UsersContainer)