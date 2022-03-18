import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link 
} from "react-router-dom";
import StarWarGenerator from './components/StarWarGenerator';
import StarWarInfo from './components/StarWarInfo';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <StarWarGenerator></StarWarGenerator>
      <Switch>
        <Route exact path={"/:resource/:id"}>
          <StarWarInfo></StarWarInfo>
        </Route>
      </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
