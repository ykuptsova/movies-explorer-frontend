import React from 'react';
import './Main.css';
import Header from '../Header/Header'
import AboutProject from '../AboutProject/AboutProject'
import Techs from '../Techs/Techs'
import AboutMe from '../AboutMe/AboutMe'
import Promo from '../Promo/Promo'
import Portfolio from '../Portfolio/Portfolio'
import Footer from '../Footer/Footer'

function Main (props) {
  return (
    <div className="main">
      <Header handleSignIn={ props.handleSignIn } handleSignOut={ props.handleSignOut }/>
      <Promo/>
      <AboutProject/>
      <Techs/>
      <AboutMe/>
      <Portfolio/>
      <Footer/>
    </div>
  )
}

export default Main; 