import { useEffect } from 'react'
import './Home.css'
import { Link } from 'react-router-dom'

function Home({ clientes }) {

  useEffect(() => {
    document.title = 'Greydive challenge'
  }, [])

  return (
    <div className="Home">
      <div className="title">
        <h1><img src={import.meta.env.BASE_URL + "/logo.png"} alt="greydive" /> challenge</h1>
        <span>Enviado por <a href="https://drive.google.com/file/d/1s2YDW8EnrG80IFTT_ATqS-xVafb9StG7/view?usp=sharing" target="_blank">ALEJO TORRES</a></span>
      </div>
      <div className="clientes">
        {clientes.map((cliente, index) => <Link className="Home-link" to={'/clientes/' + cliente} key={index} >{cliente.charAt(0).toUpperCase() + cliente.slice(1)}</Link>)}
      </div>
    </div>
  )
}

export default Home