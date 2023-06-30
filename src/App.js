

import Navbar from './Navbar';
import Home from './Home';
import { useState } from 'react';

function App() {



  return (
    <div className="App">
      <div className="content">
        <Navbar/>
          {/* <button onClick={()=>handleClick('mega' )}>Button1</button> */}
        <h1>
          <Route exact path='/'> 
          <Home/>
          </Route>
          <Route exact path='/'> 
          <Create/>
          </Route>

        </h1>
      </div>
    </div>
  );
}

export default App;
