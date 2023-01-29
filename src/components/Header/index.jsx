import { Link, useLocation } from 'wouter'
import './Header.css'
import { ChangeTheme } from '../ChangeTheme'
import clickAudio from '../../assets/sounds/se029.wav'
import mainClickAudio from '../../assets/sounds/se031.wav'
export const Header = () => {
  const [route] = useLocation()
  const buttonClickAudio = new Audio(clickAudio)
  const mainButtonClickAudio = new Audio(mainClickAudio)

  return (
    <header className='header'>
      <section className='headerIconSection'>
        <Link name='Home' onClick={() => { mainButtonClickAudio.play() }} to='/'>
          <a className='headerButton'>
            <svg xmlns='http://www.w3.org/2000/svg' fill='currentcolor' width='30' height='30' viewBox='0 0 24 24'><path d='M22 3.2c0-.663-.537-1.2-1.2-1.2h-17.6c-.663 0-1.2.537-1.2 1.2v11.8h20v-11.8zm-2 9.8h-16v-9h16v9zm2 3h-20c-.197.372-2 4.582-2 4.998 0 .522.418 1.002 1.002 1.002h21.996c.584 0 1.002-.48 1.002-1.002 0-.416-1.803-4.626-2-4.998zm-12.229 5l.467-1h3.523l.467 1h-4.457z' /></svg>
          </a>
        </Link>
      </section>
      <section className='headerNavegationSection'>
        <ul className='headerButtonsNav'>
          <li className='headerButtonsNavItem'>
            <Link onClick={() => { buttonClickAudio.play() }} to='/' className={'headerButton' + (route === '/' ? ' active' : '')}>Home</Link>
          </li>
          <li className='headerButtonsNavItem'>
            <Link onClick={() => { buttonClickAudio.play() }} to='/projects' className={'headerButton' + (route === '/projects' ? ' active' : '')}>Projects</Link>
          </li>
          <li className='headerButtonsNavItem'>
            <Link onClick={() => { buttonClickAudio.play() }} to='/about' className={'headerButton' + (route === '/about' ? ' active' : '')}>About</Link>
          </li>
        </ul>
      </section>
      <section className='headerChangeThemeSection'>
        <ChangeTheme />
      </section>
    </header>
  )
}
