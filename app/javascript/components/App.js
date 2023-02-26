import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Demo from './Demo';
import Homepage from './Homepage';

const App = () => (
  <div>
    <Routes>
      <Route path="/homepage" element={<Homepage/>} />
      <Route path="/demo" element={<Demo />} />
    </Routes>
  </div>
);

export default App;
