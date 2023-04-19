import React from 'react'
import nurse from '../images/nurse.png'; 
import './aboutus.css'

function aboutus() {
  return (
    <div className="aboutus">
        <div className="a-left">
        <img src={nurse}/>
        </div>

<div className="a-right">

<h1 id="head">MediLink: Connecting 
    Patients <br></br>and Doctors for 
    Better Healthcare.<br></br></h1>
    <p>At MediLink, we believe that everyone deserves 
        access to high- <br></br>quality healthcare, regardless of 
        their location, background, or<br></br>socioeconomic status.
         Our mission is to empower patients and<br></br>healthcare providers 
         with the tools they need to make informed<br></br>decisions, stay 
        connected, and achieve better health outcomes. <br></br></p>
<button className="learnmore">Learn More</button>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<br></br>
<div id="hrline1">  <div 
          style={{
            background: '#3867E5',
            height: '5px',
            width: '500px',
            borderRadius:'100px',
          }}
        />
</div>
</div>


    </div>
  )
}
export default aboutus;
