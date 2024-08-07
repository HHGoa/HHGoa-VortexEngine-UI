import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { Entry } from './pages/Entry';
import HowitWorks from './components/HowitWorks';
import Tutorials from './components/Tutorials';
import Dashboard from './pages/Dashboard'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/howitworks" element={<HowitWorks />} />
        <Route path="/walkthrough" element={<Tutorials />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/entry' element={<Entry />} />
      </Routes>
    </Router>
  );
}

export default App;