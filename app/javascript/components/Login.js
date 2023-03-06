import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginUser, userSelector } from '../redux/user/userSlice';
import '../styles/login.css';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(userSelector);
  const {
    error, errorMessage, message, success,
  } = user.user;
  const [state, setState] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    const { username, password } = state;
    dispatch(
      loginUser({
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
      toast.error(errorMessage);
    }
  }, [error, errorMessage, success, message, navigate]);
  return (
    <section className="container-fluid log-section">
      <div className="row log-container">
        <div className="col-md-6">
          <div className="login-content d-flex flex-column justify-content-center align-items-center">
            <img
              className="log-img img-fluid"
              src="https://res.cloudinary.com/dxsom7jmx/image/upload/v1677768358/undraw_welcome_re_h3d9_e8aywj.svg"
              alt=""
            />
            <h4>Log in</h4>
          </div>
        </div>

        <div className="log-form col-md-6 d-flex flex-column justify-content-center">
          <form className="d-flex flex-column justify-content-center align-items-center">
            <div className="form-group mb-3">
              <label htmlFor="usernameFormControlInput" className="form-label">
                Username
                {' '}
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

            <button
              type="button"
              className="btn btn-success d-block w-100 rounded-pill"
              onClick={handleSubmit}
            >
              Login
            </button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="relative d-flex flex-column justify-content-center align-items-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  <Link to="/register">Register</Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
