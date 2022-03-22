import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link 
} from "react-router-dom";

import AllNinjas from './components/AllNinjas';
import NinjaForm from './components/NinjaForm';
import OneNinjaDetail from './components/OneNinjaDetail';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Wall of Ninjas Full Stack</h1>
        <Link to="/" className="btn btn-info">Home</Link>
        <Switch>
          <Route exact path="/">
            <NinjaForm></NinjaForm>
            <hr></hr>
            <AllNinjas></AllNinjas>
          </Route>
          <Route exact path="/details/:id">
            <OneNinjaDetail></OneNinjaDetail>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
