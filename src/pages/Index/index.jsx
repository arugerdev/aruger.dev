import { useEffect, useState } from 'react'
import { Link } from 'wouter'
import './IndexPage.css'

export default function Index() {
    const [text, updateText] = useState('Web Developer')
    const [update, setUpdate] = useState(true)

    const handleUpdate = () => {
        setTimeout(() => {
            updateText('Web Developer')
        }, 0);
        setTimeout(() => {
            updateText("Frontent Developer")
        }, 4000);
        setTimeout(() => {
            updateText("Game Developer")
        }, 8000);
        setTimeout(() => {
            updateText("Unity 2D/3D Developer")
        }, 12000);

        setTimeout(() => {
            setUpdate(false);
        }, 16000);
    }

    useEffect(() => {
        if (update) {
            handleUpdate();
        }
        else {
            setUpdate(true);
        }
    }, [update])



    return (
        <div className="indexPage">
            <div>
                <span className="normal text">My name is </span>
                <span className="bold colored text">Álvaro Rüger</span>
                <span className="normal text"> and ... </span>
            </div>
            <div className="text_container">
                <span className="bold title"> I'm a </span>
                <span className="bold title sec-text"> {text}</span>
            </div>
            <div className='main_text_content'>
                <span className='bold text'>Hi! 👋</span>
                <br />
                <br />
                <span className="normal text">My name is </span>
                <span className="bold colored text">Álvaro Rüger </span>
                <span className="normal text">and I'm a experimented game  developer 🕹️ , but actually I'm learning web development 🌐, especially I work in the frontend, I usually work with React ⚛️ , Vite 🔽 , Chakra-UI and mores! </span>
                <br />
                <br />
                <span className='normal text'>
                    I have &nbsp;
                </span>
                <span className='bold text'>
                    2
                </span>
                <span className='normal text'>
                    &nbsp;years of experience developing video games in Unity, whether they are 3D or 2D, and although my dream is to create new stories, adventures and challenges where I can express myself, without a doubt, the world of web development has captivated me 💘 and every day I try to learn new things. Trying even harder!
                </span>
                <br />
                <br />
                <span className='normal text'>
                    I love web development and everything related to it, my most practiced sector is the frontend although I certainly hope one day to become a
                </span>
                <span className='bold text'>
                    &nbsp;Full-Stack Developer.
                </span>
                <span className='normal text'>
                    &nbsp;Currently I only have a couple of projects to learn and practice, which you can see on my&nbsp;
                </span>
                <a rel='noreferrer' target='_blank' href="https://github.com/AlvaroRuCh" className='bold link'>GitHub</a>

                <span className='normal text'>
                    . You can also follow me on&nbsp;
                </span>
                <a rel='noreferrer' target='_blank' href="https://www.instagram.com/aruger_dev/" className='bold link'>
                    Instagram
                </a>
                <span className='normal text'>
                    ,&nbsp;
                </span>
                <a rel='noreferrer' target='_blank' href="https://www.linkedin.com/in/aruger/" className='bold link'>
                    Linkedin
                </a>
                <span className='normal text'>
                    &nbsp;and&nbsp;
                </span>
                <a rel='noreferrer' target='_blank' href="https://twitter.com/arugerdev" className='bold link'>
                    Twitter
                </a>
                <span className='normal text'>.</span>
                <br />
                <br />
                <span className='normal text'>In this web you can see my </span>
                <Link to='/projects' className='bold link'>projects</Link>
                <span className='normal text'> of open code, enjoy it!</span>
            </div>

        </div >
    )
}