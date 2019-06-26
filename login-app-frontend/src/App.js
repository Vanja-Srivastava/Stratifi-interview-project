import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './auth/login/login';
import SignUp from './auth/sign-up/SignUp';
import Main from './main/Main';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login"></Redirect>
          </Route>

          <Route path="/main" component={Main}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/signUp" component={SignUp}></Route>
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
