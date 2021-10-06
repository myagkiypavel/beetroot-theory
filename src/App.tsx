import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const newDate = new Date()
  const date = newDate.getDate();
  const month = newDate.getMonth();
  const year = newDate.getFullYear(); 
  
  const el = React.createElement('div', { style: { color: 'red' } }, `${date}/${month}/${year}`)
  const el1 = React.createElement('p', { id: 2, }, 'Element: p')
  return (
    <div className="App">
      <h1>Hello</h1>
      {el}
      {el1}
    </div>
  );
}

export default App;
