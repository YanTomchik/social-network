import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div className={s.content}>
      <div>
        my postts
        <div>new post</div>
        <div className={s.posts}>
          <Post message = "Hi, how are u? "/>
          <Post message = "My first post "/>
        </div>
      </div>
    </div>
  );
};
export default MyPosts;
