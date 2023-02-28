import React from 'react';
import { Link } from 'react-router-dom';
const Register = () => {
  return (
    <div className="container">
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6">
          <div className="mb-3">
            <label htmlFor="nameFormControlInput" className="form-label">
              Name
              <input 
                type="text"
                className="form-control"
                id="nameFormControlInput"
                placeholder="Your Name"
                name="name"
              />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="emailFormControlInput" className="form-label">
              Email address
              <input 
                type="email"
                className="form-control"
                id="emailFormControlInput"
                placeholder="example@gmail.com"
                name="email"
              />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="usernameFormControlInput" className="form-label">
              Username
              <input 
                type="text"
                className="form-control"
                id="usernameFormControlInput"
                placeholder="username"
                name="username"
              />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="ageFormControlInput" className="form-label">
              Age
              <input 
                type="number"
                className="form-control"
                id="ageFormControlInput"
                placeholder="Your Age"
                name="age"
              />
            </label>
          </div>
          <div>
            <p>Select Gender</p>
            <div className="mb-3">
            <label htmlFor="radioFormControlInput" className="form-label">
              <input 
                type="radio"
                className="form-check-input"
                value="male"
              />
               Male
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="radioFormControlInput" className="form-label">
              <input 
                type="radio"
                className="form-check-input"
                value="female"
              />
              Female
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="radioFormControlInput" className="form-label">
              <input 
                type="radio"
                className="form-check-input"
                value="non-binary"
              />
               Non-Binary
            </label>
          </div>
          </div>
          <div className="mb-3">
            <label htmlFor="passwordFormControlInput" className="form-label">
              Password
              <input 
                type="password"
                className="form-control"
                id="passwordFormControlInput"
                placeholder="password"
                name="password"
              />
            </label>
          </div>
          <div className="mb-3">
            <button type="button" className="btn btn-primary">Register</button>
          </div>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div className="relative d-flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                <Link to="/login">Login</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register;
