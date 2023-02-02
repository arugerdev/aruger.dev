import { useState } from 'react'
import ProjectCard from '../../components/ProjectCard'
import Logo from '../../assets/images/logo-light.png'
import './Projects.css'

export default function Projects () {
  const [projects] = useState([
    {
      name: 'Image Saver',
      id: 'image-saver',
      pageLink: 'https://image-saver.vercel.app/',
      githubLink: 'https://github.com/arugerdev/image-saver',
      imageURL: 'https://image-saver.vercel.app/assets/logo-946d255e.svg'
    },
    {
      name: 'Aruger.dev',
      id: 'aruger.dev',
      pageLink: '/',
      githubLink: 'https://github.com/AlvaroRuCh/aruger.dev',
      imageURL: Logo
    }, {
      name: 'What To Do',
      id: 'WhatToDo-React-App',
      pageLink: 'https://whattodo-arugerdev.vercel.app/',
      githubLink: 'https://github.com/AlvaroRuCh/WhatToDo-React-App',
      imageURL: 'https://whattodo-arugerdev.vercel.app/logo-dark.png'
    },
    {
      name: 'LisTyDo',
      id: 'LisTyDo-React-App',
      pageLink: 'https://listydo-arugerdev.vercel.app',
      githubLink: 'https://github.com/AlvaroRuCh/LisTyDo-React-App',
      imageURL: 'https://listydo-arugerdev.vercel.app/logo.png'
    },
    {
      name: 'Rickty Seacher',
      id: 'rickty-seacher',
      pageLink: 'https://ricktyseacher-arugerdev.vercel.app/',
      githubLink: 'https://github.com/AlvaroRuCh/rickty-seacher',
      imageURL: 'https://ricktyseacher-arugerdev.vercel.app/assets/loader-logo-fbca5f4a.png'
    }
  ])
  return (
    <div className='projectsPage'>
      <h1 className='bold title'>My Projects</h1>
      <div className='projectsContent'>
        {projects.map((pro) => {
          return (
            <ProjectCard key={pro.id} name={pro.name} id={pro.id} pageLink={pro.pageLink} githubLink={pro.githubLink} imageURL={pro.imageURL} />
          )
        })}
      </div>
    </div>
  )
}
