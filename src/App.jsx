import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import RecentBlogs from "./pages/RecentBlogs";
import BlogDetails from "./pages/BlogDetails";
import { BrowserRouter } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col">
      <BrowserRouter basename="/mehedi">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <RecentBlogs />
                </>
              }
            />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
