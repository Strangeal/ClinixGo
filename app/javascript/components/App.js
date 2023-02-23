import React from 'react';
import '../styles/App.css';
import { Routes, Route } from 'react-router-dom';
import Demo from './Demo';

const App = () => (
  <div>
    <h1>Hello World!</h1>

    <Routes>
      <Route path="/demo" element={<Demo />} />
    </Routes>
  </div>
);

export default App;
