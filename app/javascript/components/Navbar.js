import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { IoMdContacts } from 'react-icons/io';
import { FaHome } from 'react-icons/fa';
import { BsFillJournalBookmarkFill } from 'react-icons/bs';
import '../styles/navbar.css';
import { CgProfile } from 'react-icons/cg'

const Navbar = () => (
  <nav className="nav-bg-color">
    <div className="container-fluid px-0">
      <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-3 mx-sm-auto mx-md-0">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <NavLink to="/demo" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white">
              <span className="fs-5 d-none d-md-inline nav-brand-color">ClinixGo</span>
            </NavLink>
            <ul className="nav flex-column md-sm-auto mb-0 align-items-center align-items-sm-start">
              <li className="nav-item pb-2">
                <NavLink to="/" className="nav-link align-middle px-0">
                  <FaHome className="fs-4 nav-icon" />
                  <span className="sm-1 d-none px-md-2 d-md-inline">Doctors</span>
                </NavLink>
              </li>
              <li className="nav-item pb-2">
                <NavLink to="/details" className="nav-link align-middle px-0 d-flex p-0">
                  <BsFillJournalBookmarkFill className="fs-4 nav-icon" />
                  <span className="sm-1 d-none px-md-2 d-md-inline">Appointments</span>
                </NavLink>
              </li>
              <li className="nav-item pb-2">
                <NavLink className="nav-link align-middle px-0">
                  <IoMdContacts className="fs-4 nav-icon" />
                  <span className="sm-1 d-none px-md-2 d-md-inline">About</span>
                </NavLink>
              </li>
            </ul>        

              {/* Dropdown profile */}
              <div className="dropdown pb-4 dropdown-nav">
                <Link className="d-flex align-items-center align-middle px-0 text-white dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                  <CgProfile className="fs-3 nav-icon" />
                  <span className="current_username d-none d-md-inline mx-1">Username</span>
                </Link>

                <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser">
                  <li><Link className="dropdown-item">New Appointment</Link></li>
                  <li><Link className="dropdown-item">Profile</Link></li>
                  <li> <hr className="dropdown-divider" /> </li>
                  <li><Link className="dropdown-item">Sign out</Link></li>
                </ul>
              </div>

          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
