import React from 'react';
import myImage from './imageInSrc.jpg';
import myVideo from './myVideo.mp4';
import './App.css';
import './style.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ border: 'solid 1px black', maxWidth: '100vw' }}>
          <h1 className="title red">Your name here</h1>
          <br />
          <img src={myImage} />
          <br />
          <img src="/imageInPublic.jpg" />
        </div>
        <video width="320" height="240" controls>
          <source src={myVideo} type="video/mp4" />
        </video>
      </header>
    </div>
  );
}

export default App;
