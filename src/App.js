import React from 'react';
import './App.css';
import Sidebar from "./Components/Sidebar";
import HomePage from './Pages/HomePage';
import Contact from './Pages/Contact';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
     <>
     <Sidebar />
      <Router>
        <Switch>
          <Route path='/home' exact component={HomePage} />
          <Route path='/history' component={History} />
           <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;


/*
function App() {
  return (
     <div className="App">
        <HomePage />
        <Sidebar />
     </div>

  );
}
export default App;

*/




