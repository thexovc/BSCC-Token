import React from 'react';
import { Routes, Route } from "react-router-dom";
import Main from './components/Main/Main';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Trx from './components/Trx/Trx';

function App() {
  return (
    <div className='bg-[#101422] w-full h-screen'>
      <Navbar />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/trx" element={<Trx />} />
      </Routes>
      <Footer />
    </div>
  );

}

export default App;