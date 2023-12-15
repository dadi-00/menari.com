import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import Favorite from "./pages/Favorite";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const path = require("path-browserify");

// var express = require('express')
// var cors = require('cors')
// var app = express()
// app.use(cors())

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Blog" element={<Blog />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Favorite" element={<Favorite />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;