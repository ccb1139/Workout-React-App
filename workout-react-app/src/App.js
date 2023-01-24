import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Routine from './pages/Routine';
import NavBar from './components/NavBar';
import NewRoutine from './pages/NewRoutine';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/routine" element={<Routine />} />
        <Route path="/newroutine" element={<NewRoutine />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
