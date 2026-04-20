import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddPost from './components/AddPost';
import BlogNavbar from './components/BlogNavbar';
import ViewAllPosts from './components/ViewAllPosts';
import Login from './components/Login';
import SignUp from './components/SignUp';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/Add" element={<AddPost />} />
      <Route path="/ViewAll" element={<ViewAllPosts />} />
      <Route path="/" element={<Login />} />
      <Route path="/SignUp" element={<SignUp />} />
    </Routes>
    </BrowserRouter>

  );
}

export default App;
