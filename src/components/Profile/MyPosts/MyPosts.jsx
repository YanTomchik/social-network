import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {

    const postData = [
        {id:1, message: 'Hi, how are u?', likesCount: 11},
        {id:2, message: 'My first post', likesCount: 12}
    ]

    return (
        <div className={s.postsBlock}>
          <h3>MyPost</h3>
            <div>
              <textarea></textarea>
                <div>new post</div>
                <div className={s.posts}>
                    <Post message= {postData[0].message} likesCount = {postData[0].likesCount}/>
                    <Post message= {postData[1].message} likesCount = {postData[1].likesCount}/>
                </div>
            </div>
        </div>
    );
};
export default MyPosts;
