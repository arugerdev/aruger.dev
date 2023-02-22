import { Link } from 'wouter'

export default function DefaultNav ({ route, buttonClickAudio }) {
  return (
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
        <li className='headerButtonsNavItem'>
          <Link onClick={() => { buttonClickAudio.play() }} to='/blog' className={'headerButton' + (route === '/blog' ? ' active' : '')}>Blog</Link>
        </li>
      </ul>

    </section>
  )
}
