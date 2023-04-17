import React from 'react'
import logo from './images/logo-02.png'
import'../src/navbar.css'


const Navbar = () => {


  const handleClick = () => {
    window.location.href = '/path/to/page';
      };



  return (
    <div className="navbar">
        <div className="navbar-header">
          <img src={logo} alt='/' />
        </div>
       
      <div className='connexion1'>
        <button className="button-connexion1" onClick={handleClick}>S'inscrire</button>
      </div>
      <div className='connexion2'>
        <button className="button-connexion2" onClick={handleClick}>Se connecter</button>
      </div>
 
  </div>
  )
}

export default Navbar