import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Routine from './pages/Routine';
import NavBar from './components/NavBar';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/routine" element={<Routine />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
