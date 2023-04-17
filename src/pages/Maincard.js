import React, { useState } from "react"
import '../pages/maincard.css'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from "../Navbar";



const MainCard = () => {

     const handleClick = () => {
  window.location.href = '/path/to/page';
    };



  return (

    <>
    <Navbar/>





    <div className='mainBody'>
                <div className='titre'>
            <h1>Choisissez votre offre</h1>
            <p>Accédez à de milliers de livres numériques, ebooks audiobooks, pour lire partout même en hors ligne avec l'application lecture</p>
            </div>
        <div className='container'>
            <div className='card'>
                <div className='Box1'>
                    <div className='content'>
                        <h2>Pass Mbolo</h2>
                        <h3>Duré 24heure</h3>

                        <ul>
                            <li>Offre sans engagement <br/></li>
                            <li> Accès à la totalité du catalogue <br/>
                            <p>Ebook, livres audio, BD et presse <br/></p> </li>
                            <li>Documentation scolaire <br/></li>
                            <li> Téléchargement de documents.</li></ul>
                           
                            <hr/>

                            
                        <h4>2000 FCFA</h4>
                                <div className='content-link1'>
                                
                                <button className="button-1" onClick={handleClick}>Acheté</button>

                                </div>
                     </div>
                        

                </div>

            </div>

            <div className='card'>
                <div className='Box2'>
                    <div className='content'>
                        <h2>Pass Go</h2>
                        <h3>Duré 24heure</h3>

                        <ul>
                            <li>Offre sans engagement <br/></li>
                            <li> Accès à la totalité du catalogue <br/>
                            <p>Ebook, livres audio, BD et presse <br/></p> </li>
                            <li>Documentation scolaire <br/></li>
                            <li> Téléchargement de documents.</li></ul>
                           
                            <hr/>


                        <h4>5 000 FCFA</h4>

                        <button className="button-2" onClick={handleClick}>Acheté</button>
                       
                        
                    </div>

                </div>

            </div>

            <div className='card'>
                <div className='Box3'>
                    <div className='content'>
                        <h2>Pass Pro</h2>
                        <h3>Duré 24heure</h3>
                        <ul>
                            <li>Offre sans engagement <br/></li>
                            <li> Accès à la totalité du catalogue <br/>
                            <p>Ebook, livres audio, BD et presse <br/></p> </li>
                            <li>Documentation scolaire <br/></li>
                            <li> Téléchargement de documents.</li></ul>
                           
                            <hr/>

                        <h4>10 000 FCFA</h4>
                    

                        <button className="button-3" onClick={handleClick}>Acheté</button>

                        
                    </div>

                </div>

            </div>


        </div>



    </div>



    </>

  )
}

export default MainCard
