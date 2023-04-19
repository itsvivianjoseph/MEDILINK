import React from 'react'
import './services.css'
const data=[
    {
        id:1,
        title: "connect with your doctors remotely through chat!",
        description:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin "
    },
    {
        id:2,
        title: "Chat with our powerful AI Medi-Bot!",
        description:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin ",
    },
    {
        id:3,
        title: "Easy and enhanced Appointment scheduling.",
        description:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin ",
    },
]
const services = () => {
  return (
   
  <section className="services container section" id="services">
    <h2 className="section-title">Services</h2>
    <div className="services-info">
      <span> Our mission at MediLink is to connect high-risk patients with the care they need, no matter where<br></br>they are. With our platform, you can easily book appointments with doctors and specialists in your<br></br>area, access telemedicine services, and manage your health information all in one place.<br></br></span>
    </div>
  <div className="services-container grid">
    {data.map(({id,title,description})=>{
      return(
        <div className="services-card" key={id}>
          <h2 className="services-title" style={
            {
              paddingBottom:"20px",
            }
          }>{title}</h2>
          <p className="services-description">{description}</p>
        </div>
      );
    })}
  </div>
  <button className="services-button">Learn More</button>
  <div id="hrline2"
        style={{
          background: '#3867E5',
          height: '5px',
          width: '500px'
        }}
      />
  </section>
  );  
};

export default services