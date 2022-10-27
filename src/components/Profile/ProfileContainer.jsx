import React from 'react'
import Profile from './Profile'
import axios from 'axios'
import { connect } from 'react-redux'
import { getProfileUsersThunk, } from "../../redux/profile-reducer"
import {
    Navigate,
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom"
import { withAuthRedirect } from '../../hoc/withAuthRedirect'
import { compose } from 'redux'

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.router.params.userId
        this.props.getProfileUsersThunk(userId)
    }

    render() {

        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }

}



let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapStateToPropsRedirect = (state) => ({
    isAuth: state.auth.isAuth

})

AuthRedirectComponent = connect(mapStateToPropsRedirect)(AuthRedirectComponent)

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,


})

compose(connect(mapStateToPropsRedirect), withAuthRedirect)(ProfileContainer)

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation()
        let navigate = useNavigate()
        let params = useParams()
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        )
    }

    return ComponentWithRouterProp
}

export default connect(mapStateToProps, { getProfileUsersThunk })(withRouter(AuthRedirectComponent))