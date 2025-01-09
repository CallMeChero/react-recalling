import Post from './Post';
import NewPost from './NewPost';
import classes from './PostList.module.css';
import { useState } from 'react';
import Modal from './Modal';

function PostList() {

    const [enteredBody, setEnteredBody] = useState('');
    const [enteredAuthor, setEnteredAuthor] = useState('');

    function bodyChangeHandler(event) {
        setEnteredBody(event.target.value)
    }

    function authorChangeHandler(event) {
        setEnteredAuthor(event.target.value)
    }

    return (
        <>
            <Modal>
                <NewPost onAuthorChange={authorChangeHandler} onBodyChange={bodyChangeHandler}/>
            </Modal>
            <ul className={classes.posts}>
                <Post author={enteredAuthor} body={enteredBody}/>
                <Post author="Petra" body="React is very awesome"/>
            </ul>
        </>
    );
}

export default PostList;