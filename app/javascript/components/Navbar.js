import React from 'react';
import { AiOutlineLogin } from 'react-icons/ai';
import { BsFillJournalBookmarkFill } from 'react-icons/bs';
import { CgProfile } from 'react-icons/cg';
import { FaHome } from 'react-icons/fa';
import { MdBookmarkAdd } from 'react-icons/md';
import { TiUserAddOutline, TiUserDeleteOutline } from 'react-icons/ti';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { currentUser } from '../redux/user/userSlice';
import '../styles/navbar.css';

const Navbar = () => {
  const user = useSelector(currentUser);

  const handleLogOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    window.location.reload(true);
    window.location.href = '/';
  };

  return (
    <nav className="position-fixed shadow">
      <div className="nav-logo text-center my-3">
        <Link to="/" className="logo">
          <span className="fw-bold">Clinix</span>
          Go
        </Link>
      </div>

      <ul className="navbar-nav">
        <li className="nav-item border">
          <Link
            to="/"
            className="nav-link d-flex flex-column align-items-center px-2 py-3"
            data-bs-toggle="tooltip"
            data-bs-placement="right"
            data-bs-title="Tooltip on right"
          >
            <FaHome className="fs-4 nav-icon" />
            <span className="d-none d-md-block">Doctors</span>
          </Link>
          <span className="tooltip-text">Doctors</span>
        </li>
        <li className="nav-item border">
          <Link
            to={`${user ? '/appointments' : '/login'}`}
            className="nav-link d-flex flex-column align-items-center px-2 py-3"
          >
            <BsFillJournalBookmarkFill className="fs-4 nav-icon" />
            <span className="d-none d-md-block">My Appointments</span>
          </Link>
          <span className="tooltip-text">My Appointments</span>
        </li>
        <li className="nav-item border">
          <Link
            to={`${user ? '/add_appointment' : '/login'}`}
            className="nav-link d-flex flex-column align-items-center px-2 py-3"
          >
            <MdBookmarkAdd className="fs-4 nav-icon" />
            <span className="d-none d-md-block">Book Appointment</span>
          </Link>
          <span className="tooltip-text">Book Appointment</span>
        </li>

        {user && user.role === 'admin' && (
          <>
            <li className="nav-item border">
              <Link
                to="/add_doctor"
                className="nav-link d-flex flex-column align-items-center px-2 py-3"
              >
                <TiUserAddOutline className="fs-4 nav-icon" />
                <span className="d-none d-md-block">Add Doctor</span>
              </Link>
              <span className="tooltip-text">Add Doctor</span>
            </li>
            <li className="nav-item border">
              <Link
                to="/all_doctors"
                className="nav-link d-flex flex-column align-items-center px-2 py-3"
              >
                <TiUserDeleteOutline className="fs-4 nav-icon" />
                <span className="d-none d-md-block">Delete Doctor</span>
              </Link>
              <span className="tooltip-text">Delete Doctor</span>
            </li>
          </>
        )}

        {!user && (
          <li className="nav-item border">
            <Link
              to="/login"
              className="nav-link d-flex flex-column align-items-center px-2 py-3"
            >
              <AiOutlineLogin className="fs-4 nav-icon" />
              <span className="d-none d-md-block">Login</span>
            </Link>
            <span className="tooltip-text">Login</span>
          </li>
        )}
      </ul>

      {user && (
        <div className="user-menu dropup-center dropup">
          <div
            className="d-flex justify-content-center align-items-center align-middle px-0 text-white dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            style={{ cursor: 'pointer' }}
          >
            <CgProfile className="fs-3 nav-icon" />
            <span className="current_username text-dark d-none d-md-inline mx-1">
              {user.username}
            </span>
          </div>

          <ul
            className="dropdown-menu dropdown-menu-dark text-small shadow"
            aria-labelledby="dropdownUser"
          >
            <li>
              {user === '' ? (
                <Link to="/login" className="dropdown-item">
                  Login
                </Link>
              ) : (
                <button
                  type="button"
                  className="dropdown-item"
                  onClick={handleLogOut}
                >
                  Sign out
                </button>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
