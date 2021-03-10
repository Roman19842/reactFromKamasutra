import react from 'react'
import s from './Post.module.css'

const Post = (props) => {
    
    return (
        <div className={s.item}>
         <img src='https://s5.cdn.teleprogramma.pro/wp-content/uploads/2020/01/e187d44f997b399185adaf352cc17b83.jpg'/>
            { props.message }
            <div>
                <span>{props.likeCount}!</span>
            </div>
        </div>

    )

}
export default Post;

