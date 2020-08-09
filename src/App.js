import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Navbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <p className='btn btn-primary'>Bootstrap loaded</p>
    </div>
  );
}

export default App;
