import React from "react";
import "./navbarModal.css"; // Separate CSS for modal styling

interface NavbarModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const NavbarModal: React.FC<NavbarModalProps> = ({ isOpen, onClose }) => {
  return (
    <>
      {isOpen && (
        <div className="navbar-modal-overlay" onClick={onClose}>
          <div
            className="navbar-modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="navbar-modal-header">
              <button className="close-modal" onClick={onClose}>
                &times;
              </button>
            </div>
            <nav className="navbar-modal-nav">
              <ul>
                <li>Add Task</li>
                <li>Search</li>
                <li>Inbox</li>
                <li>To Do</li>
                <li>Upcoming</li>
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default NavbarModal;
