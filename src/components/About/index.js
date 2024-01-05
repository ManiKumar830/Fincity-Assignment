import {Link} from "react-router-dom"
import './index.css'

const About = () => (
  <div className="about-container">
   <div className='about-items-container'>

  
     <div className='text-container'>
        <h1 className='role'>UI/UX DESIGNER</h1>
        <h1 className='main-title'>Hello,  my name is Madelyn Torff</h1>
        <p className='description'>Short text with details about you, what you do or your professional career. You can add more information on the about page.</p>
        <div>
         <Link to={"/projects"}>
          <button className='projects-button'>Projects</button>
         </Link>
         
          <button className='linkedIn-buttom'>LinkedIn</button>
        </div>
     </div>
      <img alt='logo' className='image' src="https://patryktarachon.pl/wp-content/uploads/2021/04/Powody-do-szczescia-fot.-Artem-Beliaikin-Patryk-Tarachon-2021.jpg"/>
      </div>

     
  </div>
)

export default About