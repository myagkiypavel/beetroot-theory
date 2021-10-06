import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const newDate = new Date()
  const date = newDate.getDate();
  const month = newDate.getMonth();
  const year = newDate.getFullYear(); 
  const msg = "Hello"
  
  const el = React.createElement('div', { style: { color: 'red' } }, `${date}/${month}/${year}`)
  const el1 = React.createElement('p', { id: 2, }, 'Element: p')
  const h2 = <h2 children={['Hello1', 'Hello2']}></h2>
  return (
    <div className="App">
      <h1>Hello</h1>
      {el}
      {el1}
      {h2}
    </div>
  );
}

export default App;
