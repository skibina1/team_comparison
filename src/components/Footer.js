import React from 'react'
import '../style/Footer.css'
import logo from '../img/fb.png'
import gitHub from '../img/github.png'

const Footer = () => (
  <div className="footer">
    <p>Speedway Turbo Sliders & <a className="link" href="http://www.sts-pl.eu" >www.sts-pl.eu</a></p>
    <a href="https://www.facebook.com/stspl.eu/"><img className="logoSize" src={logo} alt="Facebook"/></a>
    <a href="https://github.com/skibina1/podaj_trzy"><img className="logoSize" src={gitHub} alt="GitHub"></img></a>
  </div>
)

export default Footer