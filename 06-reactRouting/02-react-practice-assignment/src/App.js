import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link 
} from "react-router-dom";
import UserText from './components/UserText';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch >
          <Route exact path={"/home"}>
            <h1>Welcome</h1>
          </Route>
          <Route exact path={"/:input"}>
            <UserText></UserText>
          </Route>
        </Switch>
        <Route path={"/:input/:textColor/:backgroundColor"}>
          <UserText></UserText>
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
