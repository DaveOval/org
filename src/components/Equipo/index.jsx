import hexToRgba from 'hex-to-rgba';
import Colaborador from '../Colaborador'
import './Equipo.css'

const Equipo = (props) => {

    //Destructuracion
    const { colorPrimario, colorSecundario, titulo, id } = props.datos
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props
    const colorS = {backgroundColor: hexToRgba(colorPrimario, 0.4)}
    const colorP = {borderColor: colorPrimario}
    
    return <>
        { 
            colaboradores.length > 0 &&
            <section className="equipo" style={colorS}>
                <input 
                    className='input-color'
                    type="color" 
                    value={colorPrimario}
                    onChange={(e)=>{
                        actualizarColor(e.target.value, id)
                    }}
                />
                <h3 style={colorP}>{titulo}</h3>
                <div className="colaborades">
                    {
                        colaboradores.map((colaborador, index) => <Colaborador 
                            datos={colaborador} 
                            key={index} 
                            colorPrimario={colorPrimario}
                            eliminarColaborador={eliminarColaborador}
                            like={like}
                        /> )
                    }
                </div>
            </section>
        }
            </>
}
export default Equipo