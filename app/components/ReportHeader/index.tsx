import React from 'react';
import './index.css';
import Banner from './banner.jpg';

const ReportHeader = () => (
  <div className="header">
    <a href="https://www.reactboilerplate.com/">
      <img src={Banner} alt="react-boilerplate - Logo" />
    </a>
  </div>
);

export default ReportHeader;
