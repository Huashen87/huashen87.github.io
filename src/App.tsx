import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AppBar from './components/AppBar';
import About from './pages/About';
import Home from './pages/Home';
import Posts from './pages/Posts';
import Works from './pages/Works';

function App() {
  return (
    <BrowserRouter>
      <AppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/works" element={<Works />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
