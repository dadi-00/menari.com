/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
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
    <p>Porttitor leo a diam sollicitudin tempor id eu nisl. Justo eget magna fermentum iaculis eu non. Nisi vitae suscipit tellus mauris a. Non arcu risus quis varius quam. Pellentesque elit ullamcorper dignissim cras.
    Lorem sed risus ultricies tristique nulla aliquet enim. Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque. Ornare arcu odio ut s
    em nulla pharetra diam sit amet. Et malesuada fames ac turpis egestas integer eget aliquet. Turpis cursus in hac habitasse platea dictumst quisque sagittis purus. Ipsum dolor sit amet consectetur adipiscing. Nec feugiat in fermentum posuere urna nec. Viverra vitae congue eu consequat ac felis donec et. Id diam vel quam elementum pulvinar etiam non quam. Quisque non tellus orci ac auctor. At augue eget arcu dictum varius duis at consectetur. Amet risus nullam eget felis eget nunc.</p>
    {/* <img src={hero}/> */}
    </div>


<div className="content-head">
    <h3>Discover</h3>
<button className="btnhome"> More </button>
</div>

<div className="content-container">
      <div className="pic1">
        <img src={content1}/>
      </div>
      <div className="pic1">
        <img src={content1}/>
      </div>
      <div className="pic1">
        <img src={content1}/>
      </div>
</div>

<div className="descbot"> 
<p>Porttitor leo a diam sollicitudin tempor id eu nisl. Justo eget magna fermentum iaculis eu non. Nisi vitae suscipit tellus mauris a. Non arcu risus quis varius quam. Pellentesque elit ullamcorper dignissim cras.
Lorem sed risus ultricies tristique nulla aliquet enim. Lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque. Ornare arcu odio ut s
em nulla pharetra diam sit amet. Et malesuada fames ac turpis egestas integer eget aliquet. Turpis cursus in hac habitasse platea dictumst quisque sagittis purus. Ipsum dolor sit amet consectetur adipiscing. Nec feugiat in fermentum posuere urna nec. Viverra vitae congue eu consequat ac felis donec et. Id diam vel quam elementum pulvinar etiam non quam. Quisque non tellus orci ac auctor. At augue eget arcu dictum varius duis at consectetur. Amet risus nullam eget felis eget nunc.</p>
  
</div>

</div>
  );
}

export default Home;
