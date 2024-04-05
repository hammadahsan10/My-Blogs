import AddBlogs from './Blogs/AddBlogs.js';
import MyBlogs from './Blogs/MyBlogs.js';
import Navbar from './Navbar/Navbar.js';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authentication from './Authentication/Authentication.js';
import Blogs from './Blogs/Blogs.js';

function App() {

  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/signin" element={<Authentication />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/myblogs" element={<MyBlogs />} />
          <Route path="/addblogs" element={<AddBlogs />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
