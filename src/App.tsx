import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import AppBar from './components/AppBar';
import Footer from './components/Footer';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Post from './pages/Post';
import Posts from './pages/Posts';
import Tag from './pages/Tag';
import Tags from './pages/Tags';
import Works from './pages/Works';

function App() {
  return (
    <Router>
      <AppBar />
      <div style={{ minHeight: 'calc(100vh - 220px - 3em)' }}>
        <Container text>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Navigate to="/" />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:title" element={<Post />} />
            <Route path="/tags" element={<Tags />} />
            <Route path="/tags/:tag" element={<Tag />} />
            <Route path="/works" element={<Works />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Container>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
