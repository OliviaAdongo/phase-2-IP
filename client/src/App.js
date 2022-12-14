import React from 'react'; 
import './App.css';
import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';
import {BrowserRouter as Router, Route} from "react-router-dom";
//Routing component Component  where the routing  will take place
function App() {
  return (
    <div className="App">
    <Router>
      <Route path="/" exact component={Join} />
      <Route path="/chat" component={Chat} />
    </Router>
    
    </div>
  );
}

export default App;
