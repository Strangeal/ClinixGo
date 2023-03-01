import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import '../styles/App.css';
import Demo from './Demo';
import Details from './Details';
import NotFound from './NotFound';
import Register from './Register';
import Login from './Login';

const App = () => {
  return (
    <>
    <ToastContainer />
    <div>
      {/* <h1 className="text-primary">Hello World!</h1> */}
  
      <Routes>
        <Route path="/demo" element={<Demo />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    </>
  );
};

export default App;
