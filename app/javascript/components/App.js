import React from 'react';
import { Route, Routes } from 'react-router-dom';
import '../styles/App.css';
import Demo from './Demo';
import Details from './Details';
import NotFound from './NotFound';

const App = () => (
  <div>
    {/* <h1 className="text-primary">Hello World!</h1> */}

    <Routes>
      <Route path="/demo" element={<Demo />} />
      <Route path="/details/:id" element={<Details />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </div>
);

export default App;
