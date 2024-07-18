import logo from './logo.svg';
import './App.css';
import MyMarks from './classes/MyMarks';
import Matriculation from './classes/Matriculation';
import ArrayMethods from './components/ArrayMethods';
import StringMethods from './components/StringMethods';

function App() {
  console.log(MyMarks.passMraks)
  let pavan =new MyMarks()
  pavan.engMarks=65;
  pavan.hinMarks=66;
  pavan.matMarks=88;
  pavan.sciMarks=99;
  pavan.socMarks=99;
  pavan.telMarks=88;
  pavan.result()
  MyMarks.message()
  let kumar= new Matriculation()
  kumar.engMarks=6;
  kumar.hinMarks=66;
  kumar.matMarks=88;
  kumar.sciMarks=99;
  kumar.socMarks=99;
  kumar.telMarks=88;
  kumar.grade()
  
  return (
    <div className="App">
      <ArrayMethods></ArrayMethods>
      <StringMethods></StringMethods>
    </div>
  );
}

export default App;
