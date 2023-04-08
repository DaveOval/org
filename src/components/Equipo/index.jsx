import Colaborador from '../Colaborador'
import './Equipo.css'

const Equipo = (props) => {

    //Destructuracion
    const { colorPrimario, colorSecundario, titulo } = props.datos
    const {colaboradores} = props
    const colorS = {backgroundColor: colorSecundario}
    const colorP = {borderColor: colorPrimario}
    
    return <>
        { 
            colaboradores.length > 0 &&
            <section className="equipo" style={colorS}>
                <h3 style={colorP}>{titulo}</h3>
                <div className="colaborades">
                    {
                        colaboradores.map( (colaborador, index) => <Colaborador 
                            datos={colaborador} 
                            key={index} 
                            colorPrimario={colorPrimario}
                        /> )
                    }
                    
                </div>
            </section>
        }
            </>
}
export default Equipo