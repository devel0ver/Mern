import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import NavBar from './components/NavBar';
import RegisterUser from './components/RegisterUser';
import LoginPage from './components/LoginPage';
import AccountPage from './components/AccountPage';
import Home from './components/Home';
import NavBarToAccount from './components/NavBarToAccount';
import Admin from './components/Admin';

function App() {
  return (
    <BrowserRouter>
      <div className= "App" >
        <Switch>
          <Route exact path='/account/login'>
            <NavBar></NavBar>
            <LoginPage></LoginPage>
          </Route>
          <Route exact path='/account/register'>
            <NavBar></NavBar>
            <RegisterUser></RegisterUser>
          </Route>
          <Route exact path='/account/forgot_password'>
            <NavBar></NavBar>
          </Route>
        </Switch>
        <Switch>
          <Route exact path='/home'>
            <NavBarToAccount></NavBarToAccount>
            <Home></Home>
          </Route>
          <Route exact path='/admin'>
            <NavBarToAccount></NavBarToAccount>
            <Admin></Admin>
          </Route>
          <Route exact path='/all_products'>
            <NavBarToAccount></NavBarToAccount>
          </Route>
          <Route exact path='/womens_clothing'>
            <NavBarToAccount></NavBarToAccount>
          </Route>
          <Route exact path='/accessories'>
            <NavBarToAccount></NavBarToAccount>
          </Route>
          <Route exact path='/hijabs'>
            <NavBarToAccount></NavBarToAccount>
          </Route>
          <Route exact path='/contact'>
            <NavBarToAccount></NavBarToAccount>
          </Route>
          <Route exact path='/account'>
            <NavBarToAccount></NavBarToAccount>
            <AccountPage></AccountPage>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
