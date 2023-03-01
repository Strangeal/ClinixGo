import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser, userSelector } from '../redux/user/userSlice';
const Register = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    username: '',
    password: ''
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(userSelector);
  const {
    error, errorMessage, success, message,
  } = user.user;
  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const { name, email, username, password } = state;
    dispatch(registerUser({
      name,
      email,
      username,
      password
    }),
    );
  };

  useEffect(() => {
    if (success) {
      toast.success(message);
      navigate('/appointment');
    }

    if (error) {
      const err = errorMessage.map((e) => e);
      toast.error(err[0]);
    }
  }, [error, errorMessage, success, message, navigate]);
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
                value={state.name}
                onChange={handleChange}
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
                value={state.email}
                onChange={handleChange}
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
                value={state.username}
                onChange={handleChange}
              />
            </label>
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
                value={state.password}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="mb-3">
            <button type="button" className="btn btn-primary" onClick={handleSubmit}>Register</button>
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
