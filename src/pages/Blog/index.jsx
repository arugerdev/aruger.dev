import './Blog.css'
import getAllBlogsCards from '../../getAllBlogsCards'
import { Link } from 'wouter'
import { useEffect, useState } from 'react'

export default function Blog () {
  const [filter, setFilter] = useState({
    name: '',
    category: 'All'
  })
  const allBlogsData = getAllBlogsCards()

  const handleChangeFilterName = (evt) => {
    console.log(evt)
    if (evt.target.name === 'filterName') { setFilter((prevValue) => { return { category: prevValue.category, name: evt.target.value } }) }
    if (evt.target.name === 'category') { setFilter((prevValue) => { return { category: evt.target.value, name: prevValue.name } }) }
  }

  const [filteredData, updateFilteredData] = useState(allBlogsData.filter((item) => item.data.title.toLowerCase().includes(filter.name.toLowerCase())).filter((item) => (filter.category === 'All' ? true : item.data.category === filter.category)))

  useEffect(() => {
    updateFilteredData(allBlogsData.filter((item) => item.data.title.toLowerCase().includes(filter.name.toLowerCase())).filter((item) => (filter.category === 'All' ? true : item.data.category === filter.category)))
  }, [filter])

  return (
    <div className='blogPage'>
      <section className='headerBlog'>
        <img loading='lazy' title='This section is writted in Spanish!' className='spainIcon' src='https://images.emojiterra.com/twitter/v13.1/512px/1f1ea-1f1f8.png' alt='' width='24px' height='24px' />
        <section className='filterForm'>
          <form action='#' onChange={handleChangeFilterName}>
            Search:
            <select name='category' id='category'>
              <option value='All'>All</option>
              <option value='React'>React</option>
              <option value='JavaScript'>JavaScript</option>
              <option value='Css'>Css</option>
              <option value='Unity'>Unity</option>
              <option value='C#'>C#</option>
            </select>
            <input type='text' name='filterName' id='' />
          </form>
        </section>
      </section>
      <section className='blogsGrid'>
        {filteredData.map((blg) => {
          return (
            <Link to={`/blog/${blg.data.id}`} key={`blog_${blg.data.id}`}>
              <a className='blog'>
                <img loading='lazy' src={blg.data.image} alt='' />
                <h2>{blg.data.title}</h2>
                <p>{blg.data.description}</p>
                <section>
                  <img loading='lazy' src={blg.data.linkImageCategory} alt='' />
                  <small>{blg.data.category}</small>
                </section>
              </a>
            </Link>
          )
        })}
      </section>
    </div>
  )
}
