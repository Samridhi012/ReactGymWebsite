import React from "react";
import "./style.css";
import { FaTwitterSquare } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  const handleContact = () => {
    navigate("/contact");
  };
  const handleLogin = () => {
    navigate("/login");
  };
  const handleMembership = () => {
    navigate("/membership");
  };
  return (
    <div>
      <footer>
        <div className="footer-faded-text">Gym Home</div>
        <div className="cont">
          <div className="link-wrapper">
            <div>
              <a onClick={handleLogin}>Log in</a>
            </div>
            <div>
              <a onClick={handleMembership}>Membership</a>
            </div>
            <div>
              <a onClick={handleContact}>Contact Me</a>
            </div>
          </div>
          <div className="icon-wrapper">
            <Link to="#">
              <i className="fa-brands fa-instagram icon"></i>
            </Link>
            <Link>
              <FaTwitterSquare className="#" />
            </Link>
            <Link to="#">
              <i className="fa-regular fa-envelope icon"></i>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
