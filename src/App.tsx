import React from 'react';
import logo from './logo.svg';
import './App.css';

interface Props{
  style?: {};
  className?: string;
}

function Box ({style, className = '', ...rest}: Props){
  return (
    <div
      className={`box ${className}`.trim()} 
      style={{border: '3px solid tomato', ...style}}
      {...rest}
    >
      Box
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Box className='box__green' style={{border: '3px dashed black'}}/>
      <Box/>
      <Box/>
    </div>
  );
}

export default App;
