import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Join from './containers/Join/Join';
import Chat from './containers/Chat/Chat';
import './App.css'
const App = () => (
  <Router>
    <Route exact path="/" exact component={Join}/>
    <Route  exact path="/chat" component={Chat}/>
  </Router>
);

export default App;
