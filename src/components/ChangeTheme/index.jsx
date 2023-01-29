import { useEffect } from 'react'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import clickAudio from '../../assets/sounds/se010.wav'

export const ChangeTheme = () => {
  const [theme, setTheme] = useLocalStorage('theme', (window.matchMedia('(prefers-color-scheme: dark)') ? 'dark' : 'light'))
  const buttonClickAudio = new Audio(clickAudio)

  const handleClick = () => {
    setTheme((theme === 'light' ? 'dark' : 'light'))
    buttonClickAudio.play()
  }
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.remove('light')
      document.body.classList.add('dark')
    }
    if (theme === 'light') {
      document.body.classList.remove('dark')
      document.body.classList.add('light')
    }
  }, [theme])

  return (
    <button title='Change Theme' onClick={handleClick} className='headerChangeTheme'>
      <svg clipRule='evenodd' fill='currentColor' fillRule='evenodd' strokeLinejoin='round' strokeMiterlimit='2' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'><path d='m11.998 2c5.517 0 9.997 4.48 9.997 9.998 0 5.517-4.48 9.997-9.997 9.997-5.518 0-9.998-4.48-9.998-9.997 0-5.518 4.48-9.998 9.998-9.998zm0 1.5c-4.69 0-8.498 3.808-8.498 8.498s3.808 8.497 8.498 8.497z' fillRule='nonzero' /></svg>
    </button>
  )
}
