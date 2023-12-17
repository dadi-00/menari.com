import React from "react";
import { Link } from "react-router-dom";
import hero from "../assets/hero1.jpg";
import content1 from "../assets/content/content1.png";
import "../styles/Home.css";

<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Yellowtail" />

function Home() {
  return (
    <div className="homeMain">
      <div className="homeHero">
        <p>
          Indonesia merupakan negara yang kaya akan budaya, salah satunya adalah tarian daerah. Tarian daerah merupakan salah satu bentuk kesenian tradisional yang tumbuh dan berkembang di setiap daerah di Indonesia. Setiap tarian daerah memiliki ciri khas dan maknanya masing-masing. Indonesia memiliki ribuan tarian daerah yang tersebar di seluruh pelosok negeri.
        </p>
        {/* <img src={hero}/> */}
      </div>

      <div className="content-head">
        <h3>Discover</h3>
        <Link to="/blog">
          <button className="btnhome">More</button>
        </Link>
      </div>

      <div className="content-container">
        <div className="pic1">
          <img src={content1} />
        </div>
        <div className="pic1">
          <img src={content1} />
        </div>
        <div className="pic1">
          <img src={content1} />
        </div>
      </div>

      <div className="descbot">
        <p>
          Indonesia merupakan negara yang kaya akan budaya, salah satunya adalah tarian daerah. Tarian daerah merupakan salah satu bentuk kesenian tradisional yang tumbuh dan berkembang di setiap daerah di Indonesia. Setiap tarian daerah memiliki ciri khas dan maknanya masing-masing. Indonesia memiliki ribuan tarian daerah yang tersebar di seluruh pelosok negeri.
        </p>
      </div>
    </div>
  );
}

export default Home;
