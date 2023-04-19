import React from 'react'
import hero from '../images/hero.png';
import './intro.css';

function Intro() {

  return (
    <div className="intro">
        <div className="i-left">
        <h1>Revolutionizing healthcare<br></br> with MediLink - 
        The future of <br></br> medical diagnosis and <br></br> treatment at your
        fingertips.</h1>
        <p className='i-para'>Connect with the Best Healthcare Professionals and<br></br> 
        Improve Your Health with MediLink <br/></p>
        <button  className="login"><a href='http://localhost:3001/'>Login</a></button>
        </div>
        <div className="i-right">
          <img id="introimg" src={hero}/>
        </div>
    </div>
  )
}

export default Intro