import React from 'react';
import Post from './Post/Post'
import s from './MyPost.module.css';
import { addPostActionCreator, onPostChangeActionCreator } from '../../../redux/profile-reducer';


const MyPosts = (props) => {
   
    let postElement = props.posts.map( p => <Post message={p.message} likeCount={p.likeCount}/>);
    let newPostElement = React.createRef();// создаю ссылку для захвата текста с тестареа
    let onAddPost = () => {
        // присваваю значения с текстареа переменной текст
        props.addPost();// об
        
    };
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    return(
      <div className={s.postBlock}>
          <h3>My posts</h3>
        <div >
            <div>
                <div>
                <textarea onChange ={onPostChange} ref={newPostElement} value ={props.newPostText}/>
                </div>
                
                <button onClick={ onAddPost}>Add post</button>
                <button>remove</button>
            </div>
            <br/>
            <div className={s.item}>
                { postElement }
            </div>

        </div>
      </div>
    );
}
export default MyPosts;
