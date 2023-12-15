/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <><div className="footer">
      <div className="content">
        <div className="logoF">
        <img src={Logo}/>
        </div>
        <div className="contact">
          <h1>Contact Us</h1>
          <div className="socialMedia">
            <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon />
          </div>
          <div className="menuF">
          <Link to="/"> Home </Link>
        <Link to="/menu"> Blog </Link>
        <Link to="/contact"> Favorite </Link>
        <Link to="/about"> About Us </Link>
          </div>
        </div>
      </div>
      <div className="copy">
        <p> &copy; Copyright2023, Menari.com</p>
      </div>
    </div></>
  );
}

export default Footer;
