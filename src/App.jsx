import { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import './App.css'
import Header from './components/header/header'
import Formulario from './components/Formulario/Formulario'
import MiOrg from './components/MiOrg'
import Equipo from './components/Equipo'
import Footer from './components/Footer'

function App() {
  const [mostarFormulario, actualizarMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([
    {
      id: uuidv4(),
      equipo: "Front End",
      foto: "https://github.com/daveoval.png",
      nombre: "Carlos Daivd",
      puesto: "Programador",
      fav: true,
    },
    {
      id: uuidv4(),
      equipo: "Front End",
      foto: "https://images.pexels.com/photos/2896853/pexels-photo-2896853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      nombre: "Lucio Sandalio",
      puesto: "Programador",
      fav: true,
    },
    {
      id: uuidv4(),
      equipo: "Front End",
      foto: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      nombre: "Corina Yanira",
      puesto: "Programador",
      fav: true,
    },
    {
      id: uuidv4(),
      equipo: "Front End",
      foto: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      nombre: "Maria Carmen Sara",
      puesto: "Programador",
      fav: false,
    },
    {
      id: uuidv4(),
      equipo: "Programacion",
      foto: "https://github.com/daveoval.png",
      nombre: "Albino Azahar",
      puesto: "Programador",
      fav: false,
    },
    {
      id: uuidv4(),
      equipo: "Programacion",
      foto: "https://images.pexels.com/photos/2896853/pexels-photo-2896853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      nombre: "Ylenia Fanny",
      puesto: "Programador",
      fav: true,
    },
    {
      id: uuidv4(),
      equipo: "Programacion",
      foto: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      nombre: "Ovidio Yasmin",
      puesto: "Programador"
    },
    {
      id: uuidv4(),
      equipo: "Programacion",
      foto: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      nombre: "Crisóstomo Eva María",
      puesto: "Programador"
    },
    //
    {
      id: uuidv4(),
      equipo: "Data Science",
      foto: "https://github.com/daveoval.png",
      nombre: "Ximena Yairr",
      puesto: "Data Science"
    },
    {
      id: uuidv4(),
      equipo: "Data Science",
      foto: "https://images.pexels.com/photos/2896853/pexels-photo-2896853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      nombre: "Plinio Héctor",
      puesto: "Programador"
    },
    {
      id: uuidv4(),
      equipo: "Data Science",
      foto: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      nombre: "Dionisia Javi",
      puesto: "Programador"
    },
    {
      id: uuidv4(),
      equipo: "Data Science",
      foto: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      nombre: "María Josefa Ildefonso",
      puesto: "Programador"
    },
    
    //
    {
      id: uuidv4(),
      equipo: "Devops",
      foto: "https://github.com/daveoval.png",
      nombre: "José María Mía",
      puesto: "Data Science"
    },
    {
      id: uuidv4(),
      equipo: "Devops",
      foto: "https://images.pexels.com/photos/2896853/pexels-photo-2896853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      nombre: "Ciriaco Florindar",
      puesto: "Programador"
    },
    {
      id: uuidv4(),
      equipo: "Devops",
      foto: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      nombre: "Leopoldo Consuelo",
      puesto: "Programador"
    },
    {
      id: uuidv4(),
      equipo: "Devops",
      foto: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      nombre: "Jéssica Amancio",
      puesto: "Programador"
    },
    //
    {
      id: uuidv4(),
      equipo: "UX y Diseño",
      foto: "https://github.com/daveoval.png",
      nombre: "Alexandra Yago",
      puesto: "Data Science"
    },
    {
      id: uuidv4(),
      equipo: "UX y Diseño",
      foto: "https://images.pexels.com/photos/2896853/pexels-photo-2896853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      nombre: "Janeth Catalina",
      puesto: "Programador"
    },
    {
      id: uuidv4(),
      equipo: "UX y Diseño",
      foto: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      nombre: "Ana Belén Verónica",
      puesto: "Programador"
    },
    {
      id: uuidv4(),
      equipo: "UX y Diseño",
      foto: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      nombre: "Abundio Encarnación",
      puesto: "Programador"
    },
    //
    {
      id: uuidv4(),
      equipo: "Movil",
      foto: "https://github.com/daveoval.png",
      nombre: "Alexandra Yago",
      puesto: "Data Science"
    },
    {
      id: uuidv4(),
      equipo: "Movil",
      foto: "https://images.pexels.com/photos/2896853/pexels-photo-2896853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      nombre: "Janeth Catalina",
      puesto: "Programador"
    },
    {
      id: uuidv4(),
      equipo: "Movil",
      foto: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      nombre: "Ana Belén Verónica",
      puesto: "Programador"
    },
    {
      id: uuidv4(),
      equipo: "Movil",
      foto: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      nombre: "Abundio Encarnación",
      puesto: "Programador"
    },
])
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuidv4(),
      titulo: 'Programacion',
      colorPrimario: '#57C278 ',
      colorSecundario: '#D9F7E9'
    },
    {
      id: uuidv4(),
      titulo: 'Front End',
      colorPrimario: '#82CFFA',
      colorSecundario: '#E8F8FF'
    },
    {
      id: uuidv4(),
      titulo: 'Data Science',
      colorPrimario: '#A6D157',
      colorSecundario: '#F0F8E2'
    },
    {
      id: uuidv4(),
      titulo: 'Devops',
      colorPrimario: '#E06B69',
      colorSecundario: '#FDE7E8'
    },
    {
      id: uuidv4(),
      titulo: 'UX y Diseño',
      colorPrimario: '#DB6EBF',
      colorSecundario: '#FAE9F5'
    },
    {
      id: uuidv4(),
      titulo: 'Movil',
      colorPrimario: '#FFBA05',
      colorSecundario: '#FFF5D9'
    },
    {
      id: uuidv4(),
      titulo: 'Innovacion y Gestion',
      colorPrimario: '#FF8A29',
      colorSecundario: '#FFEEDF'
    },
])
  //Ternario -> condicion ? seMuestra : noSeMuestra

  const cambiarMostrar = () =>{
    actualizarMostrar(!mostarFormulario)
  }
  //Registrar colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador", colaborador)
    //Spread operator
    actualizarColaboradores([...colaboradores, colaborador])
  }
  //Eliminar colaborador
  const eliminarColaborador = (id) =>{
    console.log("Eliminar colaborador", id)
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarColaboradores(nuevosColaboradores)
  }
  //Actualizar color de equipo
  const actualizarColor = (color, id) =>{
    const equiposActualizados = equipos.map((equipo) =>{
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
  }
  //Crear equipo
  const crearEquipo = (nuevoEquipo) =>{
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuidv4()}])
  }
  //
  const like = (id) =>{
    console.log("Like", id)
    const colaboradoresAcualizados = colaboradores.map((colaborador) =>{
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaboradores(colaboradoresAcualizados)
  }

  
  return (
    <div>
      <Header/>
      {/* { mostarFormulario === true ? <Formulario/> : <></>} */}
      { 
        mostarFormulario && <Formulario 
          equipos={equipos.map((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
          /> 
      }
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      {
        equipos.map((equipo, ) => <Equipo 
          datos={equipo} 
          key={equipo.titulo}
          colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
          eliminarColaborador={eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
          />
        )
      }
      <Footer/>
    </div>
  )
}
export default App
