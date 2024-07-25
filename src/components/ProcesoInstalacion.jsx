import assets from "../assets/assets"
import { Pileta } from "./Pileta"
import data from "../utils/pools";

export function ProcesoInstalacion(){
    return(
        
        <section style={{paddingTop:'6rem'}} >
            <div className="container">

                <h1 style={{fontSize:'42px'}}>Colocación de revestimientos</h1>
                <hr />
                <p style={{maxWidth:'700px'}}>
                    En esta sección les compartiremos cómo <strong>trabajamos</strong> en OCC. <br />
                    Mostraremos cómo se colocan los distintos <strong>revestimientos</strong> en diversas superficies. <br />
                    Desde la preparación de <strong>pisos</strong>, <strong>paredes</strong> y otras superficies, pasando por la aplicación del adherente,
                     hasta la nivelación final del <strong>revestimiento</strong> a colocar.
                </p>


                <div class="container-cards" >
                    <Pileta img={assets.redondeta} titulo= 'Revestimientos de piscinas.' texto={data.pools[0].desc_corta} color={data.pools[0].color} ruta='/colocacion-de-revestimientos/piscinas' />
                    <Pileta img={assets.interiorn2} titulo= 'Recubrimientos en porcelanato, cerámica y más.' texto={data.pools[1].desc_corta} color={data.pools[1].color}ruta='/colocacion-de-revestimientos/porcelanato-ceramica' />
                    <Pileta img={assets.marmol} titulo= 'Revestimientos en mármol.' texto={data.pools[2].desc_corta} color={data.pools[2].color} ruta='/colocacion-de-revestimientos/marmol' />
                </div>
            </div>
        </section>

    )
}