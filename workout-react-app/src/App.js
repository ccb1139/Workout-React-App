import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Routine from './pages/Routine';
import NavBar from './components/NavBar';
import Recipes from './pages/NewFood';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fridge" element={<Routine />} />
        <Route path="/recipes" element={<Recipes />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
