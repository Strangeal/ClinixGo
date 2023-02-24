import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoMdContacts } from 'react-icons/io';
import { FaHome } from 'react-icons/fa';
import { BsFillJournalBookmarkFill } from 'react-icons/bs';
import '../styles/navbar.css';

const Navbar = () => (
  <nav>
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <div className="col-auto position-fixed col-md-3 col-xl-3 px-sm-2 px-0 nav-bg-color">
          <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
            <NavLink to="/demo" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white">
              <span className="fs-3 d-none d-sm-inline nav-brand-color">ClinixGo</span>
            </NavLink>
            <ul className="nav flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start">
              {' '}
              {/* nav-pills */}
              <li className="nav-item">
                <NavLink to="/" className="nav-link align-middle px-0">
                  <FaHome className="fs-4 nav-icon" />
                  {' '}
                  <span className="sm-1 d-none d-sm-inline">Doctors</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/details" className="nav-link align-middle px-0">
                  <BsFillJournalBookmarkFill className="fs-4 nav-icon" />
                  {' '}
                  <span className="sm-1 d-none d-sm-inline">Appointments</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link align-middle px-0">
                  <IoMdContacts className="fs-4 nav-icon" />
                  {' '}
                  <span className="sm-1 d-none d-sm-inline">About</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Navbar;
