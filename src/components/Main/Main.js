import React from 'react';
import './Main.css';
import Header from '../Header/Header'
import AboutProject from '../AboutProject/AboutProject'
import Techs from '../Techs/Techs'
import AboutMe from '../AboutMe/AboutMe'
import Promo from '../Promo/Promo'
import Portfolio from '../Portfolio/Portfolio'

function Main () {
  return (
    <div className="main">
      <Header/>
      <Promo/>
      <AboutProject/>
      <Techs/>
      <AboutMe/>
      <Portfolio/>
    </div>
  )
}

export default Main; 