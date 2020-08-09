import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Navbar from './components/Navbar';
import AddEmp from './components/Addnew';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AddEmp />
    </div>
  );
}

export default App;
