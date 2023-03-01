import blog0code0 from '../../assets/images/Carboncode.png'
import blog0code1 from '../../assets/images/Carboncode1.png'
import blog0code2 from '../../assets/images/Carboncode2.png'
import blog0code3 from '../../assets/images/Carboncode3.png'
import blog0code4 from '../../assets/images/Carboncode4.png'
import './blogs.css'
export default function Blogs ({ data }) {
  switch (data.id) {
    case 0: return Blog0({ data })
    // case 1: return Blog1({ data })
  }
}

export function Blog0 ({ data }) {
  return (
    <section className='blogPage'>
      <img loading='lazy' width='100%' src={data.image} alt='posticon' />
      <h1>{data.title}</h1>
      <img loading='lazy' width='90%' src={blog0code0} alt='' />
      <h2>El hook "useEffect":</h2>
      <p>Este hook tiene un uso y utilidad bastante interesante y útil, para empezar se puede resumir en una breve explicación:</p>
      <p>Ejecucción de codigo con dependencias.</p>
      <p>Te enseño un pequeño ejemplo de como se construye: </p>
      <img loading='lazy' width='90%' src={blog0code2} alt='' />
      <p>Si, se explicado así es complicado de saber todas sus funciones, pero mas adelante, en este blog encontraras ejemplos y usos para el, a sí mismo, explicaciones mucho mejores que esta sencilla frase.</p>
      <h2>Actualización de estados que dependen de otros</h2>
      <p>Vamos a hacer esto con ejemplos: Imagínate que tienes un blog, y en ese blog tienes varios "posts", pero ya que cada post tiene una categoría y me gustaría que se pueda buscar por el título del blog, vamos a hacer un filtro.</p>
      <p>Si convertimos esto a un lenguaje un poco mas técnico, pero sin llegar a programar, tenemos que:</p>
      <ul>
        <li>Necesitamos una variable con todos los posts</li>
        <li>También necesitamos una variable donde almacenemos los filtros, y los cambiemos según el input del usuario, y otra para guardar los posts ya filtrados.</li>
        <li>Con esas cosas ya podemos crear el useEffect</li>
      </ul>
      <small>Las variables serán llamadas en español para mayor legibilidad, a la practica real intenta siempre llamarlas en ingles 😉.</small>
      <img loading='lazy' width='90%' src={blog0code1} alt='' />
      <p>Como podemos ver, el useEffect requiere una función como primer parámetro y un array en el segundo (el array son las dependencias).</p>
      <p>He hablado de las dependecias varias veces pero todavía no las he explicado, bueno, llegó la hora.</p>
      <p>Las dependecias son todas aquellas varibles, u objectos, de los cuales debe de depender la función a ejecutar.</p>
      <p>En este ejemplo, lo que le estamos diciendo, es que se debe de ejecutar una función (El filtrado de los posts) cuando unas dependencias (El filtro o las propiedades de el) cambien o se actualizen (Cuando el usuario cambie el input y a su vez la variable del filtro).</p>
      <h2>¿Que pasa si prescindimos de las dependencias?</h2>
      <p>Pues hay 2 casos posibles, en uno de ellos existe una utilidad, y en el otro caso, realmente, no hace nada 😅</p>
      <img loading='lazy' width='90%' src={blog0code3} alt='' />
      <strong>¿Porque ocurre el segundo caso?</strong><p>Simple, el componente se vuelve a ejecutar cada vez que se actualize alguna propiedad dentro de él, al ocurrir esto, con un useEffect sin el segundo parámetro (Array de dependencias), el useEffect ejecuta el código sin más.</p>
      <h2>¿Dónde se puede utilizar?</h2>
      <p>El useEffect solo se puede utilizar en el cuerpo del componente, no puede estar ubicado, dentro de una función, fuera del cuerpo, etc.</p>
      <img loading='lazy' width='90%' src={blog0code4} alt='' />
    </section>
  )
}

// export const Blog1 = ({ data }) => {
//   return (
//     <section className='blogPage'>
//       <h1>Blog 1</h1>
//     </section>
//   )
// }
