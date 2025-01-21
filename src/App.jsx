import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import More from "./pages/More";
import "./App.css";

const App = () => {
  return (
    <div className="w-full min-h-screen bg-black text-white flex flex-col">
      <Router>
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <More />
                </>
              }
            />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
