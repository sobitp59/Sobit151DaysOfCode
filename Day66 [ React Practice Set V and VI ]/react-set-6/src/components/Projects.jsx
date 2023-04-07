import React, { useEffect, useState } from 'react';
import { fetchProjects } from '../database/projects';


const Projects = () => {
    const [projects, setProjects] = useState([])
    const [projectDetails, setProjectDetails] = useState({})
    const [isShow, setIsShow] = useState(false); 

    const loadProjects = async () => {
        const response = await fetchProjects('https://example.com/api/projects');
        setProjects(response.data.projects)
    }

    useEffect(() => {
        loadProjects()
    }, [])

    const showProjectDetails = (e) => {
        setIsShow(true)
        const details = projects.find(({title}) => title === e.target.value)
        setProjectDetails(details)
    }

    const {title, description, technologies, completed} = projectDetails;


    return (
    <div className='box'>
        <h1>Projects</h1>
        <div>
            {
                projects.map(({title, description}) => {
                    return(
                        <>
                            <h1>{title}</h1>
                            <p>{description}</p>
                            <button value={title} onClick={showProjectDetails}>show details</button>
                            <hr />
                        </>
                    )
                })
            }
        </div>
        <div>
            {
                isShow && (
                    <>
                        <h2>project details</h2>
                        <p><b>title</b> : {title} </p>
                        <p><b>description</b> : {description} </p>
                        <p><b>technologies</b> : { technologies.map((technology) => technology).join(' ')}</p>
                        <p><b>completed</b> : {completed ? 'true' : 'false'}</p>
                    </>
                )
            }
        </div>
    </div>
  )
}

export default Projects