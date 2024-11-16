import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import { LuListTodo } from "react-icons/lu";
import { FaSearchPlus } from "react-icons/fa";
import { IoMdCalendar } from "react-icons/io";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { IoIosArrowDropupCircle } from "react-icons/io";
import { IoNotificationsCircle } from "react-icons/io5";
import { MdInbox } from "react-icons/md";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { RiCheckboxCircleLine } from "react-icons/ri";
import { TbTargetArrow } from "react-icons/tb";
import { IoIosAlarm } from "react-icons/io";
import { IoIosMore } from "react-icons/io";
import NavbarModal from "./NavbarModal"; 

import "./dashboard.css";

const Dashboard: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="dashboard">
      <button
        className="menu-toggle"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        ☰
        <NavbarModal
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      </button>
      <div 
        className={`sidebar-overlay ${isSidebarOpen ? 'show' : ''}`}
        onClick={() => setIsSidebarOpen(false)}
      />
      <aside className="sidebar">
        <div className="user-info">
          <div className="avatar"></div>
          <span>nile_dex</span>
          <div>
            <IoNotificationsCircle />
          </div>
        </div>
        <nav className="nav-links">
          <button className="nav-item add-task">
            <p>
              <FaPlusCircle />
            </p>{" "}
            Add Task
          </button>
          <button className="nav-item">
            <p>
              <FaSearchPlus />
            </p>
            Search
          </button>
          <button className="nav-item">
            <p>
              <MdInbox />
            </p>
            Inbox <span className="badge">3</span>
          </button>
          <button className="nav-item">
            <p>
              <LuListTodo />
            </p>
            To Do <span className="badge">1</span>
          </button>
          <button className="nav-item">
            <p>
              <IoMdCalendar />
            </p>
            Upcoming
          </button>
        </nav>
        <div className="projects-container">
          <div className="dropdown-header" onClick={toggleDropdown}>
            <h3>My Projects</h3>{" "}
            <div className="icons">
              {" "}
              <p>
                <FaPlusCircle />
              </p>
              <button className="toggle-button">
                {isOpen ? (
                  <IoIosArrowDropupCircle />
                ) : (
                  <IoIosArrowDropdownCircle />
                )}
              </button>
            </div>
          </div>
          {isOpen && (
            <div className="dropdown-content">
              <p className="project">
                # Home 🏠 <span className="badge">1</span>
              </p>
              <p className="project">
                # Work 💻 <span className="badge">2</span>
              </p>
              <p className="project">
                # Travel ✈️ <span className="badge">0</span>
              </p>
            </div>
          )}
        </div>
      </aside>

      <main className="main-content">
        <div className="taskbar">
          <div className="taskbar-container">
            <h1>Let’s Set Up Your First Goal</h1>
            <div className="checked">
              {" "}
              <p>
                <RiCheckboxCircleLine />
              </p>{" "}
              <p>3 tasx</p>
            </div>

            <div className="highlight">
              <div className="highlight-text">
                <p className="highlight-icon">
                  <MdCheckBoxOutlineBlank />
                </p>
                <p>Enter Text</p>
              </div>
              <div className="highlight-text">
                <p className="highlight-icon">
                  <MdCheckBoxOutlineBlank />
                </p>
                <p>don’t hesitate</p>
              </div>
              <div className="highlight-text">
                <p className="highlight-icon">
                  <MdCheckBoxOutlineBlank />
                </p>
                <p>add a new tasx</p>
              </div>
            </div>
          </div>
          <div className="task-dropdown">
            <div className="task-form">
              <div className="form">
                <input
                  className="default"
                  type="text"
                  name="email"
                  placeholder="Task Name"
                />
              </div>
              <div className="form">
                <input
                  className="default"
                  type="text"
                  name="email"
                  placeholder="Description"
                />
              </div>
            </div>
            <div className="task-input-container">
              <div className="button-group">
                <button className="action-button">
                  <TbTargetArrow />
                  <span>Goal type</span>
                </button>

                <button className="action-button">
                  <IoMdCalendar />
                  <span>Choose Date</span>
                </button>

                <button className="action-button">
                  <IoIosAlarm />
                  <span>Set reminder</span>
                </button>

                <button className="action-button">
                  <IoIosMore />
                </button>
              </div>
            </div>

            <div className="button-tasx">
              <button className="cancel-button">Cancel</button>
              <button className="add-button">Add task</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
