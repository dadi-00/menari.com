import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
// import Favorite from "./pages/Favorite";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const path = require("path-browserify");

var express = require('express')
var cors = require('cors')
var app = express()
app.use(cors())

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/about" exact component={About} />
          {/* <Route path="/favorite" exact component={Favorite} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;