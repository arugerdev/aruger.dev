import './App.css'
import './pages/About/About.css'
import './pages/Blog/Blog.css'
import './pages/Index/IndexPage.css'
import './pages/Projects/Projects.css'
import { Header } from './components/Header'
import { Route, useLocation, Switch, Router } from 'wouter'
import SocialNetworks from './components/SocialNetworks'
import Index from './pages/Index'
import Projects from './pages/Projects'
import About from './pages/About'
import Blog from './pages/Blog'
import Blogs from './components/Blogs'
import getAllBlogsCards from './getAllBlogsCards'
function App () {
  const [location] = useLocation()
  const blogId = parseInt((location.includes('/blog/') ? location.replace('/blog/', '') : '0'))

  return (
    <div className='App'>
      <Header />
      <div className='marginTop' />
      <Router>
        <Switch>
          <Route path='/' component={Index} />
          <Route path='/projects' component={Projects} />
          <Route path='/about' component={About} />
          <Route path='/blog' component={Blog} />
          <Route path='/blog/:id'> <Blogs id={blogId} data={getAllBlogsCards()[blogId].data} /></Route>
        </Switch>
      </Router>
      <SocialNetworks />
    </div>
  )
}

export default App
