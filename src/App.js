import React from 'react';
import logo from './logo.svg'
import Counter from './Counter'
import Person from './classes';
//import './lesson-5';


function Name(props) {
  return (
    <p>
      <img src={props.logo} />
    </p>
  )
}

export function Surname(props) {
  return (
    <>
      <p>
        {props.lastName}
      </p>
      <p>
        {props.age}
      </p>
    </>
  )
}

const App = () => {
  const Greeting = 'Hello'

  const myFunc = () => {
    console.log('barev')
  }

  return (
    <>
      <div className="App">
        {Greeting}
        {myFunc()}
        <Name />
        <Surname lastName='Doe' age='22' />

      </div>
      <div className="App">
        <Person name='Joe'/>
        <Counter />
        {/* <Surname /> */}
      </div>
    </>
  );
}

export default App;
