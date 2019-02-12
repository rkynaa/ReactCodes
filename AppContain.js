import React from 'react';
import Profile from './components/Profile'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import './Test.css';

export default ()=> {
  const hello = "Hello, Rakyan";
  return (
    <div>
      <div className="warnaHeader">
        <Header/>
      </div>
      <div className="warnaContent">
        <Content/>
      </div>
      <div className="warna">
        <Profile/>
      </div>
      <div className="warnaFooter">
        <Footer/>
      </div>
    </div>
  );
}