import './App.css'
import { Header } from './components/Header'
import { Switch, Route } from 'wouter'
import SocialNetworks from './components/SocialNetworks'
import Index from './pages/Index'
import Projects from './pages/Projects'
import About from './pages/About'
function App() {
  if (window.matchMedia("(prefers-color-scheme: dark)")) {
    document.head.innerHTML.replace('<link rel="icon" type="image/svg+xml" href="/src/assets/images/logo-dark.png" />', '')
    document.head.innerHTML += ' <link rel="icon" type="image/svg+xml" href="/src/assets/images/logo-light.png" />'
  }
  if (window.matchMedia("(prefers-color-scheme: light)")) {
    document.head.innerHTML.replace('<link rel="icon" type="image/svg+xml" href="/src/assets/images/logo-light.png" />', '')
    document.head.innerHTML += ' <link rel="icon" type="image/svg+xml" href="/src/assets/images/logo-dark.png" />'
  }

  return (
    <div className="App">
      <Header></Header>
      <Switch>
        <Route path='/' component={Index}></Route>
        <Route path='/projects' component={Projects}></Route>
        <Route path='/about' component={About}></Route>
      </Switch>
      <SocialNetworks></SocialNetworks>
    </div>
  )
}

export default App

