import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '../styles/App.css';
import Demo from './Demo';
import Details from './Details';
import Homepage from './Homepage';
import Navbar from './Navbar';
import NotFound from './NotFound';

const App = () => (
  <section className="container-fluid px-0">
    <div className="row">
      <div className="col-2">
        <Navbar />
      </div>
      <div className="col-10">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </div>
  </section>
);

export default App;
