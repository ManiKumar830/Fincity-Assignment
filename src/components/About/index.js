import './index.css'

const About = () => (
  <div className="about-container">
   <div className='about-items-container'>

        <div className="octo-image-container">
           <img className="apple-image" src="https://dev-media.konfhub.com/default-event-posters/default-event-posters-image5.jpg"/>
        </div>
         
         <div>
            <ul className="list-items">
              <li className="items">About</li>
              <li className="items">Tickets</li>
              <li className="items">This is speakers section</li>
              <li className="items">This is workshop section</li>
              <li className="items">This is event sponsors</li>
            </ul>
         </div>

         <div className="title-container">
            <h1>ABOUT EVENT</h1>
            <p className="title-para">This is the description of an event. This event was 
              created as an evaluation task for the role of Frontend
               Engineer. Are you the one we are looking for? Don't get nervous. Take help if you need. Ask us more questions if you did not understand the problem. You can reach-us out at reachus@konfhub.com..</p>
         </div>

         <div>
          <h1>TICKETS</h1>
           <div>
              <ul className="tickets-container">
                <li>
                    <h1>Free Ticket</h1>
                </li>
              </ul>
           </div>
         </div>
      </div>

     
  </div>
)

export default About