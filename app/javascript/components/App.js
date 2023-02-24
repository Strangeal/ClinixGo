import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Demo from './Demo';

const App = () => (
  <div>
    <h1 className="text-primary">Hello World!</h1>

    <Routes>
      <Route path="/demo" element={<Demo />} />
    </Routes>
  </div>
);

export default App;
