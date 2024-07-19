import assets from "../assets/assets"
import { Pileta } from "./Pileta"
import data from "../utils/pools";

export function Piletas(){
    return(
        <div style={{paddingTop:'8rem'}} class="container-cards " >
            <Pileta img={assets.redondeta} titulo= 'Revestimientos de piscinas.' texto={data.pools[0].desc_corta} color={data.pools[0].color} ruta='/NuestrosTrabajos/Redondeta' />
            <Pileta img={assets.interiorn2} titulo= 'Recubrimientos en porcelanato, cerámica y más.' texto={data.pools[1].desc_corta} color={data.pools[1].color}ruta='/NuestrosTrabajos/Finlandesa' />
            <Pileta img={assets.marmol} titulo= 'Revestimientos en mármol.' texto={data.pools[2].desc_corta} color={data.pools[2].color} ruta='/NuestrosTrabajos/Argentineta' />
            </div>

    )
}