import './App.css'
import { Header } from './components/Header'
import { Switch, Route } from 'wouter'
import SocialNetworks from './components/SocialNetworks'
import Index from './pages/Index'
import Projects from './pages/Projects'
import About from './pages/About'
import DarkLogo from './assets/images/logo-dark.png'
import LightLogo from './assets/images/logo-light.png'
import { useEffect } from 'react'
function App () {
  const handleUpdateIcon = () => {
    const DarklinkIconHTML = `<link rel="icon" type="image/svg+xml" href=${DarkLogo} />`
    const LightlinkIconHTML = `<link rel="icon" type="image/svg+xml" href=${LightLogo} />`
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.head.innerHTML += DarklinkIconHTML
    }
    if (window.matchMedia('(prefers-color-scheme: light)').matches) {
      document.head.innerHTML += LightlinkIconHTML
    }
  }

  useEffect(() => handleUpdateIcon())

  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route path='/' component={Index} />
        <Route path='/projects' component={Projects} />
        <Route path='/about' component={About} />
      </Switch>
      <SocialNetworks />
    </div>
  )
}

export default App
