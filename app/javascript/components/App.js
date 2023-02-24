import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '../styles/App.css';
import Demo from './Demo';
import Details from './Details';
import Navbar from './Navbar';
import NotFound from './NotFound';

const App = () => (
  <div>
    {/* <h1 className="text-primary">Hello World!</h1> */}
    <Navbar />
    <div>
      <Routes>
        <Route path="/demo" element={<Demo />} />
        <Route path="/details" element={<Details />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  </div>
);

export default App;
