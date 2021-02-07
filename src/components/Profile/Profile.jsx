import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from "./Profile.module.css";

const Profile = () => {
    return(      <div className={s.content}>
    <div>
      <img src="https://static.addtoany.com/images/dracaena-cinnabari.jpg" alt="image"></img>
    </div>
    <div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDkvFCLSMbUU6Bqb1m-0y3LPAQ7_Gcs-PNZw&usqp=CAU"></img>
    </div>
<MyPosts/>
  </div>);
}
export default Profile