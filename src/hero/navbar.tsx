import  { useState } from "react"; // Importing useState
import { Link } from "react-router-dom";
import herologo from "../assets/herologo.png";
import { PiRocketLaunchLight } from "react-icons/pi";
import { RxDropdownMenu } from "react-icons/rx";
import Modal from "./Modal"; // Importing the Modal component

const Navbar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Adding state for modal

  return (
    <>
      <div className="navbar">
        <div className="main">
          <img src={herologo} className="logo" alt="mainlogo" />
        </div>
        <div className="button">
          <ThemeToggle />
          <div className="signupbtn">
            <Link to="/signup">Signup</Link>
          </div>
          <div className="loginbtn">
            <Link to="/login">Login</Link>
            <div className="launch">
              <PiRocketLaunchLight />
            </div>
          </div>
          {/* Mobile-only button */}
          <div>
            <button
              className="mobileButton"
              onClick={() => setIsModalOpen(true)} // Opens the modal
            >
              <RxDropdownMenu />
            </button>
          </div>
        </div>
      </div>
      {/* Conditionally render the modal */}
      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}> {/* Pass close handler */}
          <div className="modal-content">
            <h2>
              <span className="tologin">Signup</span> or{" "}
              <span className="tologin">Login</span>
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
    </>
  );
};

export default Navbar;
