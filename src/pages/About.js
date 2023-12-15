/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import team1 from "../assets/team/team1.png";
import team2 from "../assets/team/team2.png";
import team3 from "../assets/team/team3.png";
import team4 from "../assets/team/team4.png";
import team5 from "../assets/team/team5.png";
import "../styles/About.css";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

function About() {
  return (
    <div className="aboutT">
      <h1>About Us</h1>
      <div className="aboutcontent">
      <div className="aboutPic">
<img src={team1} />
</div>
  <div className="aboutDetail">
    <h2>M. Rosyadi Aulawi</h2>
    <h4>S253YA445</h4>
    <p>Lorem Ipsum has been the industry's standard dummy text ever 
      since the 1500s, when an unknown printer took a galley of type 
      and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      <div className="aboutsos">
    <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon />
    </div>
  </div>
      </div>

      <div className="aboutcontent">
      <div className="aboutPic">
<img src={team2} />
</div>
  <div className="aboutDetail">
    <h2>Wilbert Huberta</h2>
    <h4>F172YB004</h4>
    <p>Lorem Ipsum has been the industry's standard dummy text ever 
      since the 1500s, when an unknown printer took a galley of type 
      and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      <div className="aboutsos">
    <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon />
    </div>
  </div>
      </div>

      <div className="aboutcontent">
      <div className="aboutPic">
<img src={team3} />
</div>
  <div className="aboutDetail">
    <h2>Satrio Lintang W</h2>
    <h4>F263YB001</h4>
    <p>Lorem Ipsum has been the industry's standard dummy text ever 
      since the 1500s, when an unknown printer took a galley of type 
      and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      <div className="aboutsos">
    <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon />
    </div>
  </div>
      </div>

      <div className="aboutcontent">
      <div className="aboutPic">
<img src={team4} />
</div>
  <div className="aboutDetail">
    <h2>Aulia Rochullah Adis Akbar</h2>
    <h4>F253YB390</h4>
    <p>Lorem Ipsum has been the industry's standard dummy text ever 
      since the 1500s, when an unknown printer took a galley of type 
      and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      <div className="aboutsos">
    <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon />
    </div>
  </div>
      </div>

      <div className="aboutcontent">
      <div className="aboutPic">
<img src={team5} />
</div>
  <div className="aboutDetail">
    <h2>Rizwan Alfian</h2>
    <h4>F253YA054</h4>
    <p>Lorem Ipsum has been the industry's standard dummy text ever 
      since the 1500s, when an unknown printer took a galley of type 
      and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
      <div className="aboutsos">
    <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon />
    </div>
  </div>
      </div>

    </div>

    



  );
}

export default About;
