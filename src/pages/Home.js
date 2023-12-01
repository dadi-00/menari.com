import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/hero1.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Menari.com </h1>
        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam adipiscing vitae proin sagittis nisl rhoncus mattis rhoncus urna. Nec feugiat nisl pretium fusce id velit ut tortor pretium. Arcu vitae elementum curabitur vitae nunc sed velit. Nulla aliquet porttitor lacus luctus accumsan tortor posuere. Ut tellus elementum sagittis vitae et leo duis ut. Elit duis tristique sollicitudin nibh. Aliquam </p>
      </div>
    </div>
  );
}

export default Home;
