import Post from './Post';
import NewPost from '../routes/NewPost';
import classes from './PostList.module.css';
import Modal from './Modal';
import { useState, useEffect } from 'react';

function PostList() {

    const [posts, setPosts] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [errorMessage, setErrorMessage] = useState(undefined);

    useEffect(() => {
        async function fetchPosts() {
            try {
                setIsFetching(true);
                setErrorMessage(undefined)
                const response = await fetch('http://localhost:8080/posts');
                console.log(response)
                const resData = await response.json();
                if(!response.ok) {
                    setErrorMessage('An error has occured. Please contact administrator');
                }
                setPosts(resData.posts ?? []);
                setIsFetching(false);
            } catch(err) {
                setErrorMessage('An error has occured. Please contact administrator');
                setIsFetching(false);
            }
            
        }

        fetchPosts();
    }, [
        // dependency kada se okine useEffect, jer da je vani fetch bi napravio infite loop npr
    ])

    function addPostHandler(postData) {
        fetch('http://localhost:8080/posts', {
            method: 'POST',
            body: JSON.stringify(postData),
            headers: {
                'Content-type': 'application/json'
            }
        })
        // nije dobra praksa jer snapshot moze biti
        // setPosts([postData, ...posts])
        setPosts((existingPosts) => [postData, ...existingPosts])
        console.log(posts)
    }

    return (
        <>
            { !isFetching && posts.length && (
                <ul className={classes.posts}>
                    { posts.map((post) => <Post key={post.author} author={post.author} body={post.body} />) }
                </ul>
            )}
            {  !errorMessage && !isFetching && posts.length === 0 && (
                <div style={{ textAlign: 'center', color: 'white' }}>
                    <h2>There are no posts yet.</h2>
                    <p>Start adding some!</p>
                </div>
            )}
            { isFetching && (
                <div style={{ textAlign: 'center', color: 'white' }}>
                    <p>Loading posts...</p>
                </div>
            )}
            { errorMessage && (
                <div style={{ textAlign: 'center', color: 'white' }}>
                    <p>{ errorMessage }</p>
                </div>
            )}
        </>
    );
}

export default PostList;