import Post from './Post';
import NewPost from './NewPost';
import classes from './PostList.module.css';

function PostList() {
    return (
        <>
            <NewPost />
            <ul className={classes.posts}>
                <Post author="David" body="React is awesome"/>
                <Post author="Petra" body="React is very awesome"/>
            </ul>
        </>
    );
}

export default PostList;