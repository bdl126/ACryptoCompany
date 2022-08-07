import {Fragment} from 'react';

import { Route, Routes } from 'react-router-dom';

import './App.css';

import Navbar from "./components/navbar/Navbar"
import CryptoList from "./components/crypto/CryptoList"
import Footer from './components/footer/Footer';

function App() {

  return (
    <Fragment>
      <Navbar/>
      <main className='App'>
        <Routes>
          <Route path="/" element={<CryptoList/>}/>
        </Routes>
      </main>
      <Footer/>
    </Fragment>
  );
}

export default App;
