import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer'
import s from './MyPosts.module.css'
import Post from './Post/Post';





const MyPosts = (props) => {
  let postsElement = props.post.map(posts => <Post message={posts.message} like={posts.like} /> )
  let newPostElement = React.createRef();

  let onAddPost = () => {
    props.addPost();
     
  }
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text); 
    
  }
  
  return (
    <div className={s.postBlock}>
      <h3> my posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value = {props.newPostText}/>
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElement}

      </div>
    </div>


  )
}
export default MyPosts;