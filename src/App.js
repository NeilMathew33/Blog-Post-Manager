import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddPost from './components/AddPost';
import BlogNavbar from './components/BlogNavbar';
import ViewAllPosts from './components/ViewAllPosts';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/Add" element={<AddPost />} />
      <Route path="/ViewAll" element={<ViewAllPosts />} />
      <Route path="/" element={<Login />} />
    </Routes>
    </BrowserRouter>

  );
}

export default App;
