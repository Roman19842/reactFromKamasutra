import React from 'react';
import Post from './Post/Post'
import s from './MyPost.module.css';

const MyPosts = () => {
    return(
      <div>
          My posts
        <div className=''>
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>remove</button>
            </div>
            <div className={s.item}>

                <Post message='Hi!!!How are you?' />
                <Post message='it my first post' />

            </div>

        </div>
      </div>
    );
}
export default MyPosts;
