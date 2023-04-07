import Colaborador from '../Colaborador'
import './Equipo.css'

const Equipo = (props) => {

    //Destructuracion
    const { colorPrimario, colorSecundario, titulo } = props.datos
    const colorS = {backgroundColor: colorSecundario}
    const colorP = {borderColor: colorPrimario}
    
    return(
        <section className="equipo" style={colorS}>
            <h3 style={colorP}>{titulo}</h3>
            <div className="colaboradores">
                <Colaborador/>
            </div>
        </section>
    )
    
}

export default Equipo