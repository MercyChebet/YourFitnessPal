
import './App.css';
import BmiCalculator from './Components/Bmi';
import Home from './Components/Home'
import CaloriesCalculator from './Components/Calories'
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import ExerciseGuide from './Components/Exercises';
import ContactUs from './Components/Contact'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bmi" element={<BmiCalculator />} />
          <Route path="/calories" element={<CaloriesCalculator />} />
          <Route path="/exercises" element={<ExerciseGuide />} />
          <Route path="/contacts" element={<ContactUs />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
