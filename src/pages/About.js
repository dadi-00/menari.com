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
    <p>When I'm in social situations, I always hold onto my glass. It makes me feel comfortable and secure and I don't have to shake hands.</p>
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
    <p>Before you criticize someone, you should walk a mile in their shoes. That way when you criticize them, you are a mile away from them and you have their shoes.</p>
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
    <p>When your mother asks, ‘Do you want a piece of advice?’ it is a mere formality. It doesn’t matter if you answer yes or no. You’re going to get it anyway.</p>
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
    <p>Insomnia sharpens your math skills because you spend all night calculating how much sleep you’ll get if you’re able to ‘fall asleep right now.</p>
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
    <p>My therapist told me the way to achieve true inner peace is to finish what I start. So far I’ve finished two bags of M&Ms and a chocolate cake. I feel better already.</p>
      <div className="aboutsos">
    <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon />
    </div>
  </div>
      </div>

    </div>
  );
}

export default About;
