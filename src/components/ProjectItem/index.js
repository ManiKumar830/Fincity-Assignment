import "./index.css"

const ProjectItem = props => {
    const {projectDetails} = props
    const {name, projectLink, description,link} = projectDetails
    console.log(projectDetails)
    console.log(name)

    const images = ["https://staticg.sportskeeda.com/editor/2023/04/eebb2-16809677753516-1920.jpg", 
                     "https://previews.123rf.com/images/karimpard/karimpard1611/karimpard161100189/68995889-close-up-color-pin-marker-at-calendar-appointments-conception-and-copy-space-with-double-exposure.jpg",
                    "https://images.news18.com/ibnkhabar/uploads/2023/12/Smartphone-Users_ShutterStock-5-2023-12-b16188b731d0443d2aecbcf7799e5ea9.jpg?impolicy=website&width=540&height=360"]

    
        
    const randomPic = Math.floor((Math.random() * images.length));
    console.log(randomPic)
        
    return (
        <div className="project-card-container">
            <div className="project-text-container">
            <h1 className="name-text1">{name}</h1>
            <p className="description-text1">{description}</p>
            <button className="visit-button">Visit Project</button>
            </div>
            <img className="project-image" alt="images" src={images[randomPic]}/>
            
        </div>
    )
}

export default ProjectItem