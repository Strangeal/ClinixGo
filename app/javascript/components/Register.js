import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { registerUser, userSelector } from '../redux/user/userSlice';
import '../styles/login.css';

const Register = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
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
    const {
      name, email, username, password,
    } = state;
    dispatch(
      registerUser({
        name,
        email,
        username,
        password,
      }),
    );
  };

  useEffect(() => {
    if (success) {
      toast.success(message);
      navigate('/');
    }

    if (error) {
      const err = errorMessage.map((e) => e);
      toast.error(err[0]);
    }
  }, [error, errorMessage, success, message, navigate]);
  return (
    <section className="container-fluid log-section">
      <div className="row log-container">
        <div className="col-md-6">
          <div className="login-content d-flex flex-column justify-content-center align-items-center">
            <img
              className="log-img img-fluid"
              src="https://res.cloudinary.com/dxsom7jmx/image/upload/v1677769327/undraw_access_account_re_8spm_pkskcs.svg"
              alt=""
            />
            <h4>Register</h4>
          </div>
        </div>

        <div className="log-form col-md-6 d-flex flex-column justify-content-center">
          <form className="d-flex flex-column justify-content-center align-items-center">
            <div className=" form-group mb-3">
              <label htmlFor="nameFormControlInput" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                id="nameFormControlInput"
                placeholder="Your Name"
                name="name"
                value={state.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="emailFormControlInput" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="emailFormControlInput"
                placeholder="example@gmail.com"
                name="email"
                value={state.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="usernameFormControlInput" className="form-label">
                Username
              </label>

              <input
                type="text"
                className="form-control"
                id="usernameFormControlInput"
                placeholder="username"
                name="username"
                value={state.username}
                onChange={handleChange}
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="passwordFormControlInput" className="form-label">
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="passwordFormControlInput"
                placeholder="password"
                name="password"
                value={state.password}
                onChange={handleChange}
              />
            </div>
            <button
              type="button"
              className="btn btn-success d-block w-100 rounded-pill"
              onClick={handleSubmit}
            >
              Register
            </button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="relative d-flex flex-column justify-center align-items-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  <Link to="/login">Login</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
