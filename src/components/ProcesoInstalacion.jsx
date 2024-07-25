import assets from "../assets/assets"
import { Pileta } from "./Pileta"
import data from "../utils/pools";

export function ProcesoInstalacion(){
    return(
        
        <section style={{paddingTop:'7rem'}} >
            <div className="container">

                <h1>Proceso de Instalación</h1>
                <hr />

                <div style={{paddingTop:'2rem'}} class="container-cards" >

                    <Pileta img={assets.redondeta} titulo= 'Revestimientos de piscinas.' texto={data.pools[0].desc_corta} color={data.pools[0].color} ruta='/colocacion-de-revestimientos/piscinas' />
                    <Pileta img={assets.interiorn2} titulo= 'Recubrimientos en porcelanato, cerámica y más.' texto={data.pools[1].desc_corta} color={data.pools[1].color}ruta='/colocacion-de-revestimientos/porcelanato-ceramica' />
                    <Pileta img={assets.marmol} titulo= 'Revestimientos en mármol.' texto={data.pools[2].desc_corta} color={data.pools[2].color} ruta='/colocacion-de-revestimientos/marmol' />
                </div>
            </div>
        </section>

    )
}