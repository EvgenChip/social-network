import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
  
  return (
    <div className={s.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHpzSds3o3XIsT9tIOr6EjPBayDxc3rOCKbg&usqp=CAU" />
     { props.message}
     <div>
      <span>
        {props.like}
      </span>
     </div>
    </div>
  )
}
export default Post;