import React from 'react';
import logo from './logo.svg';
import './App.css';

interface Props {
  msg: string;
}

interface PropsType {
  children: {}
}

interface ChildrenProps{
  children: string;
  color: string;
}

function App() {
  // const message = (props: Props) => <h1>{props.msg}</h1>
  // const Message = (props: Props) => <h1>{props.msg}</h1>
  const Message = ({children, color}: ChildrenProps) => <h1 style={{color}}>{children}</h1>
  return (
    <div className="App">
      {/* {message({msg: 'Hello React'})}
      {message({msg: 'Hello World'})} */}

      {/* <Message msg='Hello React'/>
      <Message msg='Hello World'/> */}

      <Message color='red'>Hello React</Message>
      <Message color='green'>Hello World</Message>
    </div>
  );
}

export default App;
