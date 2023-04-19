import React from 'react'
import Blog from '../images/blog.png';
import './blog.css'

function blog() {
  return (
    <div className="blog">
        <div className="b-left">
        <h1>Read the lastest<br></br>Articles from<br></br>our Blog.<br></br></h1>
        <p style={{
          paddingTop:"19px",
        }}>We aim to provide valuable information and insights into<br></br>the latest health news, medical breakthroughs, and<br></br>wellness tips.<br></br>
        Whether you”re a health enthusiast or just looking to<br></br>improve your overall well-being,be sure to check out our<br></br>blog section regularly for latest health news,tips<br></br>
        and insights.<br></br></p>
        <button className="learnmore" style={{
          paddingTop:"5px",
        }}>Learn More</button>
    </div>
    <div className="i-right">
      <img src={Blog}/>
    </div>
    </div>
  )
}

export default blog