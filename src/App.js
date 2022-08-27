import logo from './logo.svg';
import './App.css';
import SearchFilter from './problems/SearchFilter';
import SimpleCounter from './problems/SimpleCounter';
import DisplayList from './problems/DisplayList/DisplayList';
import Accordion from './problems/Accordion/Accordion';

function App() {
  return (
    <div className="App">
      <SearchFilter /> 
      <SimpleCounter />
      <DisplayList />
      <Accordion />
    </div>
  );
}

export default App;
