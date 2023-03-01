import { useState } from 'react'
import ProjectCard from '../../components/ProjectCard'
import getAllProjects from '../../getAllProjects'

export default function Projects () {
  const [projects] = useState(getAllProjects())
  return (
    <div className='projectsPage'>
      <h1 className='bold title'>My Projects</h1>
      <h2>Web</h2>
      <div className='projectsContent'>
        {projects.Web.map((pro) => {
          return (
            <ProjectCard key={pro.id} name={pro.name} id={pro.id} pageLink={pro.pageLink} githubLink={pro.githubLink} imageURL={pro.imageURL} />
          )
        })}
      </div>
      <h2>Games</h2>
      <div className='projectsContent'>
        {projects.Games.map((pro) => {
          return (
            <ProjectCard key={pro.id} name={pro.name} id={pro.id} pageLink={pro.pageLink} imageURL={pro.imageURL} />
          )
        })}
      </div>
    </div>
  )
}
