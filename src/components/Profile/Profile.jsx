import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'
import Profileinfo from './Profileinfo/Profileinfo';

const Profile = (props) => {


  return (
    <div >
      <Profileinfo />
      <MyPosts
        postsData={props.profilePage.postsData}
        addPost={props.addPost}
        newPostText={props.profilePage.newPostText}
        updateNewPostText = {props.updateNewPostText} />


    </div>
  )
}
export default Profile;