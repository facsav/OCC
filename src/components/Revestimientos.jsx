import assets from "../assets/assets"
import { Pileta } from "./Pileta"


export function Revestimientos(){
    return(
        <div style={{paddingTop:'8rem', paddingBottom:'8rem'}} class="container-cards " >
                        <Pileta img={assets.interior1} titulo= 'Interior' texto='Trabajo realizado con cerecita y marmol' ruta='/NuestrosTrabajos/Interior' />
            <Pileta img={assets.detallado} titulo= 'Detallado' texto='Trabajo realizado con cerecita y marmol' ruta='/NuestrosTrabajos/Detallado' />
            <Pileta img={assets.exterior} titulo= 'Exterior' texto='Trabajo realizado con cerecita y marmol' ruta='/NuestrosTrabajos/Exterior' />
        </div>

    )
}