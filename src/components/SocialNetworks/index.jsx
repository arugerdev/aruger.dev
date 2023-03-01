import github from '../../assets/images/github.png'
import instagram from '../../assets/images/instagram.png'
import linkedin from '../../assets/images/linkedin.png'
import twitter from '../../assets/images/twitter.png'
import './SocialNetworks.css'
export default function SocialNetworks () {
  const data = [{
    icon: github,
    url: 'https://github.com/arugerdev'
  }, {
    icon: instagram,
    url: 'https://www.instagram.com/aruger_dev/'
  }, {
    icon: linkedin,
    url: 'https://www.linkedin.com/in/aruger/'
  }, {
    icon: twitter,
    url: 'https://twitter.com/arugerdev'
  }]

  return (
    <div className='socialNetworks'>
      <ul className='socialNetworksList'>
        {data.map((sn, i) => {
          return (
            <li key={i}>
              <a title={'Social network ' + i} target='_blank' href={sn.url} className='socialNetworkButton' rel='noreferrer'>
                <img loading='lazy' src={sn.icon} alt={'Social network ' + i} />
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
