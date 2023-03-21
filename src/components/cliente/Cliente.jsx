import { useEffect } from 'react'
import './Cliente.css'

function Cliente({ data }) {

  useEffect(() => {
    document.title = data.cliente.charAt(0).toUpperCase() + data.cliente.slice(1) + ' | Greydive challenge'
  }, [])

  return (
    <div className="Cliente">
      <div className="content">
        <h1>{data.cliente.charAt(0).toUpperCase() + data.cliente.slice(1)}</h1>
        <video src={data.linkVideo} type='video/mp4' controls="controls" preload='none' >Este video no puede ser reproducido en su navegador.</video>
        <a class="video-url" href={data.linkVideo} target="_blank">Video URL</a>
        <div className="tareas">
          <h3>Tareas</h3>
          <p>{data.escenario}</p>
          {data.preguntas.map((pregunta, index) => {
            return <div className="tarea" style={{ borderBottom: index < data.preguntas.length - 1 ? '1px solid #f2f2f2' : 'none' }} key={index}>
              <h6>{"Tarea " + (index + 1) + ":"}</h6>
              <p>{pregunta.texto.replaceAll("\\n", "\n")}</p>
              {pregunta.tipoTarea === "opinionScale5" && <p>Respuesta: {pregunta.respuesta}</p>}
              <p className="duracion">Duración de la tarea: {pregunta.tiempo}</p>
            </div>
          })}
        </div>
        <div className="transcripcion">
          <h3>Transcripción</h3>
          <p>{data.transcripcion.replaceAll("<br>", "\n")}</p>
        </div>
      </div>
    </div>
  )
}

export default Cliente