import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Navbar from './components/Navbar';
import AddEmp from './components/Addnew';
import Table from './components/Displaytab';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <Navbar style={{ margin:'30'}}/>
      <AddEmp />
      <Table />
    </div>
  );
}

export default App;
