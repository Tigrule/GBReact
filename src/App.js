// import logo from './logo.svg';
import './App.css';

function App() {
  const userName = 'Евгений';
  const theme = 'light';
  const data = [];

  return (
    <div className ='App'> 
      {data ? 
      <MyHeader 
        name = {userName} 
        id = {1} 
        theme = {theme}
        data = {data}
        /> 
      : null}
      <div>Hello</div>
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
