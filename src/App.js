import React from 'react';
import {Switch, Route, Link} from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component'

const HatsPage = (props) => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

const TopicsPage = (props) => (
  <div>
    <h1>TOPIC LIST PAGE</h1>
    <Link to={`${props.match.url}/13`}>TO TOPIC 13</Link> 
    <Link to={`${props.match.url}/17`}>TO TOPIC 17</Link> 
    <Link to={`${props.match.url}/21`}>TO TOPIC 21</Link>
  </div>
);

const TopicIdPage = (props) => (
  <div>
    <h1>TOPIC {props.match.params.TopicId} PAGE</h1>
  </div>
);

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/hats" component={HatsPage}/>
        <Route exact path="/topics" component={TopicsPage}/>
        <Route exact path="/topics/:TopicId" component={TopicIdPage}/>
      </Switch>
    </div>
  );
}

export default App;
