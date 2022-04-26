import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/Button/Button';


function App() {
  return (
    <div>
      <Button text="mon button"/>
      <Button>click</Button>
      <Button text="click ici" bgColor="orange"/>
      <Button text="3eme button" color="green"/>
      <Button><img src='https://www.iconfinder.com/icons/1729358/emoji_emoticon_happy_smile_icon'/><div>helo</div></Button>      
    </div>
  );
}

export default App;
