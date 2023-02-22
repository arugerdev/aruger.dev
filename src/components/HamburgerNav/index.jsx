import { useState } from 'react'
import { Link } from 'wouter'
import openSound from '../../assets/sounds/se015.wav'
import closeSound from '../../assets/sounds/se026.wav'

export default function HamburgerNav ({ route, buttonClickAudio }) {
  const [state, updateState] = useState(false)
  const openAudio = new Audio(openSound)
  const closeAudio = new Audio(closeSound)

  const handleClick = () => {
    if (state) { closeAudio.play() }
    if (!state) { openAudio.play() }

    updateState(prevValue => !prevValue)
  }

  return (
    <section className='headerHNavegationSection'>
      <button onClick={handleClick} className={`hamburgerButton ${state ? 'open' : 'close'}`}>
        <div className='hamburgerNavIconPiece' />
        <div className='hamburgerNavIconPiece' />
        <div className='hamburgerNavIconPiece' />
        <div className='hamburgerNavIconPiece' />
        <div className='hamburgerNavIconPiece' />
        <div className='hamburgerNavIconPiece' />
      </button>

      <section className={`hDashboard ${state ? 'open' : 'close'}`}>
        <div className='hMenu'>
          <ul className='hNavMenu'>
            <li className='headerButtonsNavItem'>
              <Link onClick={() => { buttonClickAudio.play() }} to='/' className={'headerButton' + (route === '/' ? ' active' : '')}>Home</Link>
            </li>
            <li className='headerButtonsNavItem'>
              <Link onClick={() => { buttonClickAudio.play() }} to='/projects' className={'headerButton' + (route === '/projects' ? ' active' : '')}>Projects</Link>
            </li>
            <li className='headerButtonsNavItem'>
              <Link onClick={() => { buttonClickAudio.play() }} to='/about' className={'headerButton' + (route === '/about' ? ' active' : '')}>About</Link>
            </li>
            <li className='headerButtonsNavItem'>
              <Link onClick={() => { buttonClickAudio.play() }} to='/blog' className={'headerButton' + (route === '/blog' ? ' active' : '')}>Blog</Link>
            </li>
          </ul>
        </div>

      </section>
    </section>
  )
}
