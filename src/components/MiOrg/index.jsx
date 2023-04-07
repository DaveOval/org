import { useState } from 'react';
import './MiOrg.css'

const MiOrg = (props) => {
        //Estado - hooks    
        //useSatate
        //const [nombreVariable, funcionActualiza] = useSate(valorInicial)
        console.log(props)
        //const [mostrar, actualizarMostrar] = useState(true)
        // const manejarClick = () => {
        //    console.log('Monstrar/Ocultar elemento', !mostrar);
        //    actualizarMostrar(!mostrar)
        //}
        
        return (
            <section className="orgSection">
                <h3 className='title'>Mi Organizacion</h3>
                <img src="./img/add.PNG" alt="add" onClick={props.cambiarMostrar}/>
            </section>
        );
    }

export default MiOrg;