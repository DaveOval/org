import { useState } from 'react'
import './App.css'
import Header from './components/header/header'
import Formulario from './components/Formulario/Formulario'
import MiOrg from './components/MiOrg'

function App() {
  const [mostarFormulario, actualizarMostrar] = useState(true)

  //Ternario -> condicion ? seMuestra : noSeMuestra

  const cambiarMostrar = () =>{
    actualizarMostrar(!mostarFormulario)
  }

  return (
    <div>
      <Header/>
      {/* { mostarFormulario === true ? <Formulario/> : <></>} */}
      { mostarFormulario && <Formulario/> }
      <MiOrg cambiarMostrar={cambiarMostrar}/>
    </div>
  )
}

export default App
