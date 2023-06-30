

import Navbar from './Navbar';
import Home from './Home';
import Blogdetails from './Blogdetails';
//import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Create from './Create';

function App() {



  return (
    <BrowserRouter>
    <div className="App">
      <div className="content">
        
          {/* <button onClick={()=>handleClick('mega' )}>Button1</button> */}
        <h1>
        <Navbar/>
        </h1>
          <Switch>
          <Route exact path='/' > 
            <Home/>
          </Route>
          <Route  path='/create' > 
          <Create/>
          </Route>
          <Route  path='/blogs/:id' > 
          <Blogdetails/>
          </Route>
          </Switch>      
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
