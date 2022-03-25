import './App.css';
import { useState } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import AllProducts from './components/AllProducts';
import ProductForm from './components/ProductForm';
import OneProduct from './components/OneProduct';
import EditProductForm from './components/EditProductForm';

function App() {

  //create a variable that we can send to the form component and the form component will toggle this variables value each time the form is submitted
  let [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <BrowserRouter>
      <div className="App container">
          <h1>Product Manager</h1>
        <Switch>
          <Route exact path='/'>
            <ProductForm formSubmitted = {formSubmitted} setFormSubmitted = {setFormSubmitted}></ProductForm>
              <br />
            <AllProducts formSubmitted = {formSubmitted}></AllProducts>
          </Route>
          <Route exact path='/products/:_id'>
            <OneProduct></OneProduct>
            <Link to="/" className="btn btn-primary">Home</Link>
          </Route>
          <Route exact path='/edit/:_id'>
            <EditProductForm></EditProductForm>
            <Link to="/" className="btn btn-primary mt-3">Home</Link>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
} 

export default App;
