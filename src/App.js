import { useState, useEffect } from 'react';
import './App.css';
import { db } from './firebase';
import './image4.jpg';
import Post from './Post';
import image1 from './image1.jpg';
import image2 from './image2.jpg';
import image3 from './image3.jpg';
import image4 from './image3.jpg';
import image5 from './image3.jpg';
import instaLogo2 from './instaLogo2.png';
import Instagram_logo from './Instagram_logo.png';

function App() {
const [posts, setPosts] = useState([
 
  // {
  //   username : "Nick Wolfgang",
  //   caption : "Wow!! It works :)",
  //   profilePic : image4,
  //   postImage : image5 //{image5}
  // },
  // {
  //   username : "Brice Wolfgang",
  //   caption : "Wow!! It works :)",
  //   profilePic : image1,
  //   postImage : image5 //{image5}
  // }
]); 
//useEffect runs a piece of code on aparticular condition
/* onSnapshot is the listener
Every single time we add a document(e.g post), it fires the code below!!!
*/
useEffect(() => {
  db.collection('posts').onSnapshot(snapshot => {
    //Every time a new post is added, this thing fires up
    setPosts(snapshot.docs.map(doc => doc.data()));
  }) 
}, []);  

  return (
    <div className="App">
      <div className="app__header">
        <img
          className='app__headerImage'
          src={Instagram_logo}
          alt='Instagram Logo'
        />
      </div>
      {
        posts.map(i => (
          <Post 
            username={i.username} 
            caption={i.caption}
            profilePic={i.profilePic}
            postImage={i.postImage}
          />
        ))
      }
    </div>
  );
}

export default App;
