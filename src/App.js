import logo from './logo.svg';
import './App.css';
import SearchFilter from './problems/SearchFilter';
import SimpleCounter from './problems/SimpleCounter';
import DisplayList from './problems/DisplayList/DisplayList';

function App() {
  return (
    <div className="App">
      <SearchFilter /> 
      <SimpleCounter />
      <DisplayList />
    </div>
  );
}

export default App;
