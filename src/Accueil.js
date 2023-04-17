import React from 'react'
import './accueil.css'
import Logo from './images/logo-02.png'
import image from './images/Page Acceuil-02.png'




const Accueil = () => {

    const handleClick = () => {
        window.location.href = '/maincard';
          };


  return (
    <div className='accueil'>
        <div className='accueil-image'>
            <img className='img1' src={Logo} alt='/' />
            <img className='img2' src={image} alt='' />
            <div className='accueil-text'>
                <h1 className='Text1'>
                    Bibliothèque
                </h1>

                <h2 className='Text2'>
                    en ligne au Gabon
                </h2>

                <p className='Text3'>
                    Accédez à de milliers de livres numérique, <br/>
                    audiobooks, pour lire partout même <br/> hors ligne avec l'application lecture
                </p>

            </div>

        </div>


        <div className='connexion3'>
        <button className="button-connexion3" onClick={handleClick}>S'inscrire</button>
      </div>
      <div className='connexion4'>
        <button className="button-connexion4" onClick={handleClick}>Se connecter</button>
      </div>
 

    </div>
  )
}

export default Accueil