import React from 'react';
import '../styles/spinner.css';

const Spinner = () => (
  <>
    <div className="spinner-container">
      <div className="loader JS_on">
        <span className="binary" />
        <span className="binary" />
        <span className="getting-there">LOADING STUFF...</span>
      </div>
    </div>
  </>
);

export default Spinner;
