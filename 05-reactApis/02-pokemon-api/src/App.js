import logo from './logo.svg';
import './App.css';
import PokemonGeneratorWithAxios from './components/PokemonGeneratorWithAxios';

function App() {
  return (
    <div className="App">
      {/* <PokemonGenerator></PokemonGenerator> */}
      <PokemonGeneratorWithAxios></PokemonGeneratorWithAxios>
    </div>
  );
}

export default App;
