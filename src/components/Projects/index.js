import { Component } from "react";
import { AiFillInstagram } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import {v4 as uuidv4} from 'uuid'
import ProjectItem from "../ProjectItem";
import "./index.css"


class Projects extends Component {
    state = {projectName: "", projectDescription: "", projectLink: "",projectsList: []}

    projectName = event => {
        this.setState({projectName: event.target.value})
    }

    projectLink = event => {
        this.setState({projectLink: event.target.value})
    }

    projectDescription = event => {
        this.setState({projectDescription: event.target.value})
    }

    onSubmitEvent = event => {
        event.preventDefault()
        const {projectName, projectLink, projectDescription} = this.state
    
        const newProject = {
          id: uuidv4(),
          name: projectName,
          link: projectLink,
          description: projectDescription,
        }
    
        this.setState(prevState => ({
          projectsList: [...prevState.projectsList, newProject],
          projectName: '',
          projectLink: '',
          projectDescription: "",
        }))
      }

    render() {
        const {projectsList, projectName, projectDescription, projectLink} = this.state
        console.log(projectsList)
        return (
            <div className='add-project-container'>
            <h1 className='add-project-text'>Add Project</h1>

            <form onSubmit={this.onSubmitEvent} className='form-container'>
              <div className='input-container'>
                  <label className='name-text' htmlFor='projectName'>Project Name</label>
                <input value={projectName}  onChange={this.projectName} className='input' id="projectName" type='text'/>
              </div>

              <div className='input-container'>
                  <label className='name-text' htmlFor='projectLink'>Project Link</label>
                <input value={projectLink}  onChange={this.projectLink} className='input' id="projectLink" type='text'/>
              </div>

              <div className='input-container'>
                  <label className='name-text' htmlFor='project-description'>Description</label>
                <textarea value={projectDescription} onChange={this.projectDescription} rows={10}  className='textarea' id="project-description" />
              </div>

              <button type='submit' className='add-button'>Add</button>
               
            </form>


            <div className="projects-container">
                <h1 className="project-text">Projects</h1>
                <ul className="project-list-container">
                {projectsList.map(eachItem => (
                <ProjectItem
                    projectDetails={eachItem}
                    key={eachItem.id}
                />
                ))}
            </ul>
            </div>

            <div>
                        <AiFillInstagram className="logos"/>
                        <FaLinkedin className="logos" />
                        <IoMdMail className="logos"/>
            </div>
            <p>Copyright © 2024.  All rights reserved</p>
     </div>
        )
    }
}

export default Projects