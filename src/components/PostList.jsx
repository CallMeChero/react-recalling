import Post from './Post';
import NewPost from './NewPost';
import classes from './PostList.module.css';
import Modal from './Modal';

function PostList({onHideModal, modalIsVisible}) {

    return (
        <>
            { modalIsVisible 
                && <Modal onClose={onHideModal}>
                    <NewPost onCancel={onHideModal}/>
                </Modal>
            }
            <ul className={classes.posts}>
                <Post author="Petra" body="React is very awesome"/>
            </ul>
        </>
    );
}

export default PostList;