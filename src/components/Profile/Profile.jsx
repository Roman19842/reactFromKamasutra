import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css'

const Profile = () => {
    return(
      <div>
        <div><img className={s.mainimage} src='https://www.atorus.ru/public/ator/data/image/News/46470/san-sebastian-2541598_960_720.jpg'/></div>
        <div>
        <MyPosts />
        </div >
        
      </div>
    );
}
export default Profile;
