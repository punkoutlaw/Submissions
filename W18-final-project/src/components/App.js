import React from 'react';
import '../styles/css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigation from "./Navigation";
import Cards from './Cards';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <main>
        <div className='container'>
          <Cards />
          <Sidebar />
        </div>
      </main>
    </div>
  );
}

export default App;
