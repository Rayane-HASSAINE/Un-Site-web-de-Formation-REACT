import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="" className="about-img" />
        <img src={play_icon} alt="" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tomorrow's Leaders Today</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex
          doloremque tempora hic illo quam exercitationem voluptatibus eveniet
          illum modi dolor.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          sint atque nesciunt cumque consequatur laudantium quae accusantium
          neque laboriosam similique?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Reprehenderit hic molestias deleniti sed ex, reiciendis dolor tenetur
          est rerum laborum.
        </p>
      </div>
    </div>
  )
}

export default About
