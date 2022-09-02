import './App.css';
import SearchFilter from './problems/SearchFilter';
import SimpleCounter from './problems/SimpleCounter';
import DisplayList from './problems/DisplayList/DisplayList';
import Accordion from './problems/Accordion/Accordion';
import ImageSlider from './problems/ImageSlider/ImageSlider'
import CheckList from './problems/CheckList';

const slides = [
  {url:'https://media.distractify.com/brand-img/IPJP2rGdp/768x402/walterthedog-1592229773475.jpg', title:'Walter'},
  {url:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiWoDHdBLUmWCOBTaBqdV86w89R0c4wfOWyQ&usqp=CAU', title:'Walter watermelon helmet'},
  {url:'https://preview.redd.it/9in0rv9sl2351.png?width=1366&format=png&auto=webp&s=282e9b1612f490b9966dc1aefd1a6daf30a729c9', title:'Walter White'},
  {url:'https://www.meme-arsenal.com/memes/98d063a14e22a19bbdcc80788f789541.jpg', title:'Walter syas it is a threat'},
  {url:'https://www.pageant.dog/ph/u/216703276193085/5837961059443580/7769a95741e97d2ba04662ae936ed4c21.jpg?w=412&h=412&w=450&h=450&v=31&dpr=2&fm=webp', title:'Walter gets Bonked'}
]


function App() {
  return (
    <div className="App">
      {/* <SearchFilter /> 
      <SimpleCounter />
      <DisplayList />
      <Accordion />
      <ImageSlider slides={slides}/>  */}
      <CheckList />
    </div>
  );
}

export default App;
