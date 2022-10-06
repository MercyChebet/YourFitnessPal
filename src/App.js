
import './App.css';
import BmiCalculator from './Components/Bmi';
import Home from './Components/Home'
import CaloriesCalculator from './Components/Calories'
import {BrowserRouter, Router, Route} from 'react-router-dom'
import ExerciseGuide from './Components/Exercises';

function App() {
  return (
    <div className="App">
  <BrowserRouter>
  <Router>
    <Route path = "/" element = {<h1>Home</h1>}/>
  </Router>
  </BrowserRouter>
     
    </div>
  );
}

export default App;
