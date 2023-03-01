
import Logo from '../src/assets/images/logo-light.png'

export default function getAllProjects () {
  return (

    {
      Web: [

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
      ],
      Games: [
        {
          name: 'IsoGolf!',
          id: 'iso-golf',
          pageLink: 'https://alvaroch.itch.io/iso-golf',
          imageURL: 'https://img.itch.zone/aW1nLzc4MjE5MDgucG5n/original/Ma3f76.png'
        },
        {
          name: 'Kill them all in one minute',
          id: 'kill-them-all-in-one-minute',
          pageLink: 'https://alvaroch.itch.io/kill-them-all-in-one-minute',
          imageURL: 'https://img.itch.zone/aW1nLzg1ODA1NjAucG5n/105x83%23/PhEzJI.png'
        },
        {
          name: 'Neon Cheetah',
          id: 'neoncheetah',
          pageLink: 'https://alvaroch.itch.io/neoncheetah',
          imageURL: 'https://img.itch.zone/aW1nLzkwODY2ODguanBn/315x250%23c/F4XjxI.jpg'
        },
        {
          name: 'Grow Hole!',
          id: 'growhole',
          pageLink: 'https://alvaroch.itch.io/growhole',
          imageURL: 'https://img.itch.zone/aW1nLzkyNTUzMzgucG5n/105x83%23/%2BBOBG7.png'
        }
      ]
    }
  )
}