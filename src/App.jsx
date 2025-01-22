import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import RecentBlogs from "./pages/RecentBlogs";
import BlogDetails from "./pages/BlogDetails";
import { HashRouter as Router } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

import "./App.css";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col">
      <Router>
        <Header />
        <div className="flex-grow">
          <ScrollToTop />
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
      </Router>
    </div>
  );
};

export default App;
