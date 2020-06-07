import React from 'react';
// import logo from './logo.svg';
import { Link, Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import Header from './components/header/header.component.jsx';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';
// import { tsPropertySignature } from '@babel/types';

const TopicsList = props => {
  return (
    <div>
      <h1>Topics List PAGE</h1>
      <Link to={`${props.match.url}/13`}>TO TOPIC 13</Link><br />
      <Link to={`${props.match.url}/42`}>TO TOPIC 42</Link>
    </div>
  );
};

const TopicDetail = props => {
  console.log(props);
  return (
    <div>
      <h1>Topic Detail PAGE: {props.match.params.topicId}</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/topics' component={TopicsList} />
        <Route path='/topics/:topicId' component={TopicDetail} />
        <Route path='/signin' component={SignInAndSignUpPage} />
      </Switch>
    </div>
  )
}

export default App;