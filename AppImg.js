import React from 'react';
import './Test.css';

export default ()=> {
  const hello = "Hello, Rakyan";
  return (
    <div>
      <h1 className="warna">Hello Rakyan! { hello }</h1>
      <div className="warna2">
        <img src="https://cdn-images-1.medium.com/max/1600/0*ldBFvkFs63SIk0T3.jpg" width="50px" className="App-logo" />
        <img src="https://cdn-images-1.medium.com/max/1600/0*ldBFvkFs63SIk0T3.jpg" width="50px" className="App-logo"/>
      </div>
    </div>
  );
}