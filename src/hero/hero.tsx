import { Link } from "react-router-dom";
import { useState } from "react";
import herologo from "../assets/herologo.png";
import { PiRocketLaunchLight } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa";
import { RxDropdownMenu } from "react-icons/rx";
import Modal from "./Modal";


function Hero() {
  
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // For controlling modal visibility

  const nftImages: string[] = [
    "https://m.media-amazon.com/images/I/61dnnWNkGfS._SY522_.jpg",
    "https://m.media-amazon.com/images/I/51tgP+x5u3L._AC_SF480,480_.jpg",
    "https://m.media-amazon.com/images/I/41je8NkddDL._AC_SF480,480_.jpg",
    "https://rowman.com/L/15/381/9781538174753.jpg",
    "https://rowman.com/L/16/114/9781611460483.jpg",
    "https://m.media-amazon.com/images/I/61dnnWNkGfS._SY522_.jpg",
    "https://m.media-amazon.com/images/I/51tgP+x5u3L._AC_SF480,480_.jpg",
    "https://m.media-amazon.com/images/I/41je8NkddDL._AC_SF480,480_.jpg",
    "https://rowman.com/L/15/381/9781538174753.jpg",
    "https://rowman.com/L/16/114/9781611460483.jpg",
  ];

  return (
    <>
      <div>
        <div className="navbar">
          <div className="main">
            <img src={herologo} className="logo" alt="mainlogo" />
          </div>
          <div className="button">
            <div className="signupbtn">
              <p><Link to="/signup">Signup</Link></p>
            </div>
            <div className="loginbtn">
              <Link to="/login">Login</Link>
              <div className="launch">
                <PiRocketLaunchLight />
              </div>
            </div>
            {/* Mobile-only button */}
            <div>
              <button name="mobilebutton"
                className="mobileButton"
                onClick={() => setIsModalOpen(true)}
              >
                <RxDropdownMenu />
              </button>
            </div>
          </div>
        </div>

        <div className="socialsbar">
          <div className="socials">
            <p>
              <FaXTwitter />
            </p>
            <p>
              <FaDiscord />
            </p>
            <p>
              <FaInstagramSquare />
            </p>
            <p>
              <FaGithubAlt />
            </p>
          </div>
        </div>

        <div className="herobody">
          <div className="herotext">
            <p className="goaltext">
              Track your goals and mint achieved goals as <span className="tologin">NFTs</span>
            </p>
            <p className="subtext">
              Keep track of your financial goals and activities with Plan A,
              track activity progress, build a healthy routine, and lots more...
            </p>
            <div
              className="dropdown-container"
              onMouseEnter={() => setIsDropdownVisible(true)}
              onMouseLeave={() => setIsDropdownVisible(false)}
            >
              <div className="loginbtn">
                Learn More{" "}
                <div className="launch">
                  <PiRocketLaunchLight />
                </div>
              </div>
              {isDropdownVisible && (
                <div className="dropdown-menu">
                  <a href="#option1" className="dropdown-item">
                    Order Plan A Here
                  </a>
                  <a href="#option2" className="dropdown-item">
                    Customize your Plan A
                  </a>
                  <a href="#option3" className="dropdown-item">
                    About Us
                  </a>
                </div>
              )}
            </div>
          </div>
          <div className="nft">
            <img
              className="nftimg"
              id="nftImg"
              src="https://media.licdn.com/dms/image/D5612AQFgWIKKh6LY3g/article-cover_image-shrink_720_1280/0/1714664219064?e=2147483647&v=beta&t=Z2K1gpf-fj6BU_f04ROr-NCZ6sQsSTmrwunEeisp300"
              alt="plan-anft"
            />
          </div>
        </div>

        <div className="scroller-wrapper">
          <div className="scroller-content">
            {nftImages.map((src, index) => (
              <img
                key={index}
                src={src}
                alt={`NFT ${index + 1}`}
                className="nft-image"
              />
            ))}
            {/* Duplicate images for continuous scrolling */}
            {nftImages.map((src, index) => (
              <img
                key={index + nftImages.length}
                src={src}
                alt={`NFT ${index + 1}`}
                className="nft-image"
              />
            ))}
          </div>
        </div>

        <div className="abttext">
          <h1>Different Collections of NFTs</h1>
          <h1 className="subtitle">About</h1>
        </div>
        <div className="about">
          <div className="image-stack">
            <img
              className="borderless top-image"
              src="https://cdn-lambda.kwork.com/files/portfolio/t0/62/45ab9898299da36a2d16710b63118ca4cea575a8-1651180862.webp"
              alt="aboutimg1"
            />
            <img
              className="borderless middle-image"
              src="https://cdn-lambda.kwork.com/files/portfolio/t0/01/df5678f256a3cc5157fb035029bac01c4a641d88-1651180801.webp"
              alt="aboutimg2"
            />
            <img
              className="borderless bottom-image"
              src="https://cdn-lambda.kwork.com/files/portfolio/t0/22/c720662d0246d745f501d6ba4d7dfbab00e833be-1651180922.webp"
              alt="aboutimg3"
            />
            
          </div>
          <div className="abt">
            <p className="aboutplana">
              Plan A is a tracking tool for reflection, planning, and
              improvement. It helps in starting your day and rounding it off.
              Keep track of your goals and activities with Plan A, track
              activity progress, build a healthy routine, and lots more...
            </p>
            <p className="aboutplana">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Plan A is
              a tracking tool for reflection, planning, and improvement. It
              helps in starting your day and rounding it off.
            </p>
          </div>
        </div>
      </div>

      {/* Conditionally render the modal */}
      {isModalOpen && (
  <Modal onClose={() => setIsModalOpen(false)}>
    <div className="modal-content">
      <h2>
        <span className="tologin">Signup</span> or <span className="tologin">Login</span>
      </h2>
      <div className="modal-buttons">
        <Link to="/signup">
          <h3>Signup</h3>
        </Link>
      </div>
      <div className="modal-buttons">
        <Link to="/login">
          <h3>
            Login 
            <div className="launch">
              <PiRocketLaunchLight />
            </div>
          </h3>
        </Link>
      </div>
    </div>
  </Modal>
)}
           <footer className="footer">
        <div className="ftr">
          <div className="footerlogo">
            <img src={herologo} className="logo" alt="mainlogo" />
          </div>
          <div className="comhero">
            <h3>Company</h3>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Address</li>
            </ul>
          </div>
          <div className="comhero">
            <h3>Socials</h3>
            <ul>
              <li>
                X
              </li>
              <li>Instagram</li>
              <li>Linkedin</li>
              <li>Github</li>
            </ul>
          </div>
        </div>
        © 2024 Made with. 📚 Plan A. All rights reserved.
      </footer>
    </>
  );
}

export default Hero;
