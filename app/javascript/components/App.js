import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '../styles/App.css';
import Demo from './Demo';
import Details from './Details';
import Navbar from './Navbar';
import NotFound from './NotFound';
import Homepage from './Homepage';

const App = () => (
  <section className="container-fluid px-0">
    <div className="row">
      <div className="col-3">
          <Navbar />
      </div>
      <div className="col-9">
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
