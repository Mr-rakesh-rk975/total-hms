import React from 'react';
import '../Home/Homepage.css'
import Header from '../../Components/Header/Header';
import Navbar from '../../Components/Navbar/Navbar';
import Maintop from '../../Components/Main/MainTop/Maintop';
import Maincontent from '../../Components/Main/MainContent/Maincontent';

function Homepage() {
  return (
   <>
   <Header/>
   <Navbar/>
   <Maintop/>
   <Maincontent/>
   </>
  )
}

export default Homepage