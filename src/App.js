
import './App.css';
import BmiCalculator from './Components/Bmi';
import Home from './Components/Home'
import CaloriesCalculator from './Components/Calories'

function App() {
  return (
    <div className="App">
  
      <Home />
      <BmiCalculator />
      <CaloriesCalculator />
    </div>
  );
}

export default App;
