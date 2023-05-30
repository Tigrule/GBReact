// import logo from './logo.svg';
import './App.css';
// import { useState } from 'react';
import { MessagesBlock } from './components/messages';


function App() {
  const userName = 'Евгений';
  const theme = 'light';

  return (
    <div className ='App'> 
      <MyHeader 
        name = {userName} 
        id = {1} 
        theme = {theme}
        />
      <MessagesBlock/>
    </div>
  );
}

export default App;

const MyHeader = ({name, id, theme}) => {
  console.log(name);
  return (
    <div style={{
      background: theme === 'dark' ? "#222" : "#fff",
      opacity: 0.2
      }}>
      <h1>Привет, {name}</h1>
    </div>
  )
}
