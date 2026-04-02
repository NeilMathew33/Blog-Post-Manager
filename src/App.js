import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddPost from './components/AddPost';
import BlogNavbar from './components/BlogNavbar';
import ViewAllPosts from './components/ViewAllPosts';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<AddPost/>} />
      <Route path="/ViewAll" element={<ViewAllPosts/>} />
    </Routes>
    </BrowserRouter>

  );
}

export default App;
