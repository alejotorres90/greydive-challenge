import './App.css'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './components/home/Home'
import Cliente from './components/cliente/Cliente'
import db from './db/db'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home clientes={db.map(element => element.cliente)} />} />

        {db.map((cliente, index) => <Route path={"/clientes/" + cliente.cliente} element={<Cliente data={cliente} />} key={index} />)}

        <Route path="/*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  )
}

export default App