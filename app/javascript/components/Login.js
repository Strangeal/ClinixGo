import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, userSelector } from '../redux/user/userSlice';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(userSelector);
  const { error, errorMessage, message, success } = user.user;
  const [state, setState] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = () => {
    const { username, password } = state;
    dispatch(loginUser({
      username,
      password
    }))
  }

  useEffect(() => {
    if (success) {
      toast.success(message);
      navigate("/demo");
    }

    if (error) {
      toast.error(errorMessage);
    }
  }, [])
  return (
    <div className="container">
      <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form className="space-y-6">
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
            <button type="button" className="btn btn-primary" onClick={handleSubmit}>Login</button>
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
