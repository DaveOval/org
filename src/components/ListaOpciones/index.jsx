import './ListaOpciones.css';
const ListaOpciones = (props) => {

    //Metodo map -> arreglo.map((elemento, indice) => {return elemento}

    const equipos = [
        'Programacion',
        'Front End',
        'Data Science',
        'Devops',
        'UX y Diseño',
        'Movil',
        'Innovacion y Gestion',
    ];

    const manejarCambio = (e) =>{
        console.log("Cambio", e.target.value)
        props.actualizarEquipo(e.target.value)
    }
    return(
        <div className='lista-opciones'>
            <label >Equipos</label>
            <select value={props.valor} onChange={manejarCambio}>
                <option value="" disabled defaultValue="" hidden>Seleccionar equipo</option>
                {equipos.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option>)}
            </select>
        </div>
    );
}

export default ListaOpciones;