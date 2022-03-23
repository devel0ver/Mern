import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import AllProducts from './components/AllProducts';
import ProductForm from './components/ProductForm';
import OneProduct from './components/OneProduct';

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <Switch>
          <Route exact path='/'>
            <h1>Product Manager</h1>
            <ProductForm></ProductForm>
            <hr />
            <AllProducts></AllProducts>
          </Route>
          <Route exact path='/api/products/:_id'>
            <OneProduct></OneProduct>
            <Link to="/" className="btn btn-primary">Home</Link>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
} 

export default App;
