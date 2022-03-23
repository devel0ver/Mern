import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';

// import AllProducts from './components/AllProducts';
import ProductForm from './components/ProductForm';

function App() {
  return (
    <BrowserRouter>
      <div className="App container">
        <h1>Product Manager</h1>
        <ProductForm></ProductForm>
        {/* <AllProducts></AllProducts> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
