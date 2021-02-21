import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {

    let postsElements =
        props.postData.map(post => <Post message= {post.message} likesCount = {post.likesCount}/>)

    return (
        <div className={s.postsBlock}>
          <h3>MyPost</h3>
            <div>
              <textarea></textarea>
                <div>new post</div>
                <div className={s.posts}>
                    {postsElements}
                     </div>
            </div>
        </div>
    );
};
export default MyPosts;
