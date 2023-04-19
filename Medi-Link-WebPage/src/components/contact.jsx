import React from 'react'
import './contact.css'
import contact from '../images/contact.png';
function contacts() {
  return (
    <div>
    <div className='rectangle'>
<img id="rec" src={contact}/>

    </div>
    <div id="hrline"
        style={{
          background: '#3867E5',
          height: '5px',
          width: '500px',
          borderRadius:'100px',
        }}
      />
    </div>
  )
}
export default contacts
