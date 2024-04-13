import assets from "../assets/assets"
import { Pileta } from "./Pileta"
import data from "../utils/pools";

export function Piletas(){
    return(
        <div style={{paddingTop:'8rem'}} class="container-cards " >
            <Pileta img={assets.redondeta} titulo= {data.pools[0].name} texto={data.pools[0].desc_corta} color={data.pools[0].color} ruta='/NuestrosTrabajos/Redondeta' />
            <Pileta img={assets.finlandesa} titulo= {data.pools[1].name} texto={data.pools[1].desc_corta} color={data.pools[1].color}ruta='/NuestrosTrabajos/Finlandesa' />
            <Pileta img={assets.argentineta} titulo= {data.pools[2].name} texto={data.pools[2].desc_corta} color={data.pools[2].color}ruta='/NuestrosTrabajos/Argentineta' />
            <Pileta img={assets.fuente} titulo= {data.pools[3].name} texto={data.pools[3].desc_corta} color={data.pools[3].color}ruta='/NuestrosTrabajos/Fuente' />
            <Pileta img={assets.escaloneta} titulo= {data.pools[7].name} texto={data.pools[7].desc_corta} color={data.pools[7].color} ruta='/NuestrosTrabajos/Escaloneta' />
            <Pileta img={assets.lgbt} titulo= {data.pools[5].name} texto={data.pools[5].desc_corta} color={data.pools[5].color}ruta='/NuestrosTrabajos/Lgbt' />
            <Pileta img={assets.eggs} titulo= {data.pools[8].name} texto={data.pools[8].desc_corta} color={data.pools[8].color}ruta='/NuestrosTrabajos/Celeste' />
            <Pileta img={assets.clasica} titulo= {data.pools[4].name} texto={data.pools[4].desc_corta} color={data.pools[4].color}ruta='/NuestrosTrabajos/Clasica' />
            <Pileta img={assets.adefinir} titulo= {data.pools[6].name} texto={data.pools[6].desc_corta} color={data.pools[6].color}ruta='/NuestrosTrabajos/Adefinir' />
        </div>

    )
}