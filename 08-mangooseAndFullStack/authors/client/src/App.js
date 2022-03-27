import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import AllAuthors from './components/AllAuthors';
import AuthorForm from './components/AuthorForm';
import EditAuthor from './components/EditAuthor';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Favorite authors</h1>
        <Switch>
          <Route exact path='/'>
            <Link to='/new' className='btn btn-primary'>Add new author</Link>
            <AllAuthors></AllAuthors>
          </Route>
          <Route exact path='/new'>
            <Link to='/' className='btn btn-primary'>Home</Link>
            <AuthorForm></AuthorForm>
          </Route>
          <Route exact path='/edit/:_id'>
            <Link to='/' className='btn btn-primary'>Home</Link>
            <EditAuthor></EditAuthor>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
