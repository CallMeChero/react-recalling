import PostList from './components/PostList';
import MainHeader from './components/MainHeader';
import { useState } from 'react';

function App() {

  const [modalIsVisible, setModalIsVisible] = useState(false);

  function showModalHandler() {
    setModalIsVisible(true)
  }

  function hideModalHandler() {
    setModalIsVisible(false)
  }
  console.log(modalIsVisible)
  return (
    <>
      <MainHeader onShowModal={ showModalHandler }/>
      <main>
        <PostList modalIsVisible={modalIsVisible} onHideModal={hideModalHandler}/>
      </main>
    </>
    
  )
}

export default App;
