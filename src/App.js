

import Navbar from './Navbar';
import Home from './Home';
import { useState } from 'react';

function App() {
  let i=0

  const [number, setNumber]=useState(50)
  const [color,setColor]=useState('red')

  const handleClick =(name1) => {
    
    console.log("Hey you "+ name1 , i )
    if((i%2)==0)
    {
    setColor('blue')
    setNumber(55)
    }
    else
    {
      setColor('red')
      setNumber(50)
    }
    i++
  }

  return (
    <div className="App">
      <div className="content">
        <Navbar/>
        <button onClick={()=>handleClick('mega' )}>Button1</button>
        <h1>
          APP COMPONENTS HERE
          <p>color is {color} , number is {number}
          </p>
          <Home/>
        </h1>
      </div>
    </div>
  );
}

export default App;
