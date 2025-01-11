import Post from './Post';
import NewPost from './NewPost';
import classes from './PostList.module.css';
import Modal from './Modal';
import { useState } from 'react';

function PostList({onHideModal, modalIsVisible}) {

    const [posts, setPosts] = useState([]);

    function addPostHandler(postData) {
        // nije dobra praksa jer snapshot moze biti
        // setPosts([postData, ...posts])
        setPosts((existingPosts) => [postData, ...existingPosts])
        console.log(posts)
    }

    return (
        <>
            { modalIsVisible 
                && <Modal onClose={onHideModal}>
                    <NewPost onCancel={onHideModal} onAddPost={addPostHandler}/>
                </Modal>
            }
            <ul className={posts.length ? classes.posts : null}>
                { posts.length
                    ? posts.map((post) => <Post key={post.author} author={post.author} body={post.body} />)
                    : <div style={{ textAlign: 'center', color: 'white' }}>
                        <h2>There are no posts yet.</h2>
                        <p>Start adding some!</p>
                    </div>
                }
            </ul>
        </>
    );
}

export default PostList;