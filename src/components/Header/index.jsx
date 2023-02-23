import { Link, useLocation } from 'wouter'
import './Header.css'
import { ChangeTheme } from '../ChangeTheme'
import clickAudio from '../../assets/sounds/se029.wav'
import mainClickAudio from '../../assets/sounds/se031.wav'
import DefaultNav from '../DefaultNav'
import HamburgerNav from '../HamburgerNav'
import { useEffect, useState } from 'react'
export const Header = () => {
  const [route] = useLocation()
  const buttonClickAudio = new Audio(clickAudio)
  const mainButtonClickAudio = new Audio(mainClickAudio)

  const [screenWidth, updateScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      updateScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [window.innerWidth])

  return (
    <header className='header'>
      <section className='headerIconSection'>
        <Link onClick={() => { mainButtonClickAudio.play() }} to='/'>
          <a title='Home' className='headerButton'>
            <svg xmlns='http://www.w3.org/2000/svg' fill='currentcolor' width='30' height='30' viewBox='0 0 24 24'><path d='M22 3.2c0-.663-.537-1.2-1.2-1.2h-17.6c-.663 0-1.2.537-1.2 1.2v11.8h20v-11.8zm-2 9.8h-16v-9h16v9zm2 3h-20c-.197.372-2 4.582-2 4.998 0 .522.418 1.002 1.002 1.002h21.996c.584 0 1.002-.48 1.002-1.002 0-.416-1.803-4.626-2-4.998zm-12.229 5l.467-1h3.523l.467 1h-4.457z' /></svg>
          </a>
        </Link>
      </section>
      {screenWidth > 500 &&
        <DefaultNav route={route} buttonClickAudio={buttonClickAudio} />}
      {screenWidth <= 500 &&
        <HamburgerNav route={route} buttonClickAudio={buttonClickAudio} />}
      <section className='headerChangeThemeSection'>
        <ChangeTheme />
      </section>
    </header>
  )
}
