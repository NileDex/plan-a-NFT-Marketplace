// Goal.jsx
import React from 'react';
import { Link } from "react-router-dom";
import { RiCheckboxBlankCircleLine } from "react-icons/ri";
import { FaWeightHanging } from "react-icons/fa6";
import { PiChartLineUpDuotone } from "react-icons/pi";
import { FaUserGear } from "react-icons/fa6";
import { FaBriefcase } from "react-icons/fa";
import herologo from "../assets/herologo.png";
import "./goal.css";

const Goal = () => {
  return (
    <div className="page-wrapper">
      <nav className="navbar">
        <div className="logo-container">
          <img src={herologo} className="logo" alt="mainlogo" />
        </div>
        <div className="skip-button">
          <span><Link to="/dashboard">Skip |</Link></span>
        </div>
      </nav>

      <main className="main-container">
        <div className="content-wrapper">
          <header className="header">
            <h1>What kind of goals are you working on?</h1>
            <h3>Choose from the options below to customize your experience.</h3>
          </header>

          <div className="cards-grid">
            <div className="card">
              <div className="card-inner">
                <div className="checkmark">
                  <RiCheckboxBlankCircleLine />
                </div>
                <div className="card-icon">
                  <FaUserGear />
                </div>
                <div className="card-text">
                  <p>Personal Development</p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-inner">
                <div className="checkmark">
                  <RiCheckboxBlankCircleLine />
                </div>
                <div className="card-icon">
                  <FaBriefcase />
                </div>
                <div className="card-text">
                  <p>Career & Work</p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-inner">
                <div className="checkmark">
                  <RiCheckboxBlankCircleLine />
                </div>
                <div className="card-icon">
                  <FaWeightHanging />
                </div>
                <div className="card-text">
                  <p>Fitness & Health</p>
                </div>
              </div>
            </div>

            <div className="card">
              <div className="card-inner">
                <div className="checkmark">
                  <RiCheckboxBlankCircleLine />
                </div>
                <div className="card-icon">
                  <PiChartLineUpDuotone />
                </div>
                <div className="card-text">
                  <p>Finance</p>
                </div>
              </div>
            </div>
          </div>

          <button className="continue-button">
            Continue
          </button>
        </div>
      </main>
    </div>
  );
};

export default Goal;