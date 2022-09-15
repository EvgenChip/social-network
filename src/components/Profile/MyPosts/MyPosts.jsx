import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post';




const MyPosts = (props) => {
  let postsElement = props.postsData.map(posts => <Post message={posts.message} like={posts.like} /> )
  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
    newPostElement.current.value = '';
  }
  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.updateNewPostText(text); 
    console.log(text)
  }
  console.log(props.newPostText)
  return (
    <div className={s.postBlock}>
      <h3> my posts</h3>
      <div>
        <div>
          <textarea onChange={onPostChange} ref={newPostElement} value = {props.newPostText}/>
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        {postsElement}

      </div>
    </div>


  )
}
export default MyPosts;