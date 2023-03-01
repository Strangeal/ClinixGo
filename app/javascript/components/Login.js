import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="container">
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6">
          <div className="mb-3">
            <label htmlFor="usernameFormControlInput" className="form-label">
              Username
              <input type="text" className="form-control" id="usernameFormControlInput" placeholder="username" />
            </label>
          </div>
          <div className="mb-3">
            <label htmlFor="passwordFormControlInput" className="form-label">
              Password
              <input type="password" className="form-control" id="passwordFormControlInput" placeholder="password" />
            </label>
          </div>
          <div className="mb-3">
            <button type="button" className="btn btn-primary">Login</button>
          </div>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div className="relative d-flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                <Link to="/register">Register</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;
