import { useEffect, useState } from 'react'
import { TimeLinePoints } from '../../components/TimeLinePoints'

export default function About () {
  const [yearsOld, updateYearsOld] = useState(0)
  const timeCardData = ({ date, points }) => {
    return {
      date,
      points
    }
  }
  const [timeLine] = useState([
    timeCardData({
      date: 'Now...',
      points: [{
        title: 'Learning Web Development!',
        description: 'See my projects in my GitHub and give me a star please!'
      },
      {
        title: 'Set aside game development for a while',
        description: 'I will never give up game development entirely, but I want to focus on learning web development and have put all my projects on hold for now.'
      }
      ]
    }),
    timeCardData({
      date: '2022',
      points: [{
        title: 'Yes, programming',
        description: 'Decided, I will study a middle grade after this year, to be able to enter a higher grade of Web Application Development 🌐! This will be the job I dedicate myself to 💼!'
      }
      ]
    }),
    timeCardData({
      date: '2021',
      points: [{
        title: 'My future is this',
        description: 'My brother advised me to enter a FPB to be able to have ESO, since I left ESO due to bad times, and it was clear that I did not want to continue studying. I entered 1º of FPB of informatics and telecommunications'
      }, {
        title: 'A new experience',
        description: 'My brother literally saved me, he opened the doors of his house for a few months at my worst, and he supported and helped me at all times ❤️‍🩹💖. Thanks to him, I matured, changed, and understood how I should do things, and in what way.'
      }, {
        title: 'My brother taught me Unity',
        description: 'My brother, seeing me being interested in technology and programming, showed me unity and told me to try it.'
      },
      {
        title: 'Bad, very bad...',
        description: 'I had pretty bad mental health these years 🧠💔 and suffered a lot. I thought I was lost, and there was no solution for me.'
      }]
    }),
    timeCardData({
      date: '2020',
      points: [{
        title: 'My worst year of my life...',
        description: "This year, was the worst year of my life 😢... I left the conservatory for bad mental health, and I met people I shouldn't have, I got carried away and made mistakes several times in those years. But they say that making mistakes is necessary to learn, so I learned, I learned a lot from it, and now I know how to choose who to relate to."
      }, {
        title: 'A long time ago in a galaxy far, far away called "Game Maker Studio"',
        description: "A wild 'hello world' appears! I wrote my first line of code in game make studio, with null knows of programming, learning on the go and creating projects for fun with friends."
      }]
    }),
    timeCardData({
      date: '2019',
      points: [{
        title: 'Music for my ears...',
        description: 'This year, everyone recommended that I enroll in a music conservatory, as it turns out that I have a great talent for music and piano 🎵🎹. I entered a private conservatory with the highest grade possible without having prepared anything more than a few months...'
      }]
    }),
    timeCardData({
      date: '2018',
      points: [{
        title: 'Bad moment',
        description: "I repeated a year because I didn't know very well what I was doing, I lost concentration for a while and I ruined my studies."
      }]
    }),
    timeCardData({
      date: '2014',
      points: [{
        title: 'A funny times...',
        description: 'At this times, I only thought in videogames, yes, all of days playing videogames. I spent a lot of time playing videogames, rpgs, sandboxes, and mainly anything that was free and fun. If you asked me about any video game, surely I would know how to tell you what it is about and what its best or worst things are. 🤓'
      },
      {
        title: 'First computer!',
        description: "This is hard to say... I stole my older brother's computer. Not in really, he just bought a new better computer and he ''gift'' me his old computer."
      }]
    }),
    timeCardData({
      date: '2005',
      points: [{
        title: 'I was born!',
        description: '🐣 Me! (with 0 years old of course)'
      }]
    })
  ])

  useEffect(() => {
    const birthDate = new Date('21 July 2005')
    const nowDate = new Date(Date.now()).getTime()
    const diff = (nowDate - birthDate)
    const parsedDiff = Math.trunc(diff / (1000 * 60 * 60 * 24 * 365.2425))
    updateYearsOld(parsedDiff)
  })

  // updateYearsOld()

  return (
    <div className='aboutPage'>
      <h1 className='bold title'>About</h1>
      <span className='normal text'>Hi! 👋</span>
      <span className='normal text'>
        My name is
      </span>
      <span className='bold colored text'>Álvaro Rüger </span>
      <span className='normal text'>, I'm </span>
      <span className='bold text'>
        {yearsOld}
      </span>
      <span className='normal text'> years old and I work in programming, to be exact I create games 🕹️, but mainly for now I want to work in web development 🌐, and be able to keep improving my knowledge as much as I can.
      </span>
      <br />
      <br />
      <span className='normal text'>
        You can certainly contact me to ask me any questions on social networks.
      </span>
      <br />
      <br />
      <span className='normal text'>
        Since this page is dedicated to talking about me, and although this aptitude is not particularly good for me 😅, I will try to explain the most important aspects of myself and tell everything in as much detail as possible.
      </span>
      <div className='timeLine'>
        {
                    timeLine.map((item, i) => {
                      return (
                        <div className='timeDate' key={`timeDate el ${i}`}>
                          <h2 className='date bold title'>{item.date}</h2>
                          <ul className='timeList'>
                            <TimeLinePoints points={item.points} />
                          </ul>
                        </div>
                      )
                    })
                }
      </div>

      <br />
      <br />
      <div>
        <span className='normal text'>Thank you, brother, for always being there </span>
        <a target='_blank' rel='noreferrer' className='normal link' href='https://github.com/RubenRuCh'>@RubenRuCh</a>
      </div>
    </div>

  )
}
