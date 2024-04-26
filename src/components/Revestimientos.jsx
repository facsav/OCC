import assets from "../assets/assets"
import { Pileta } from "./Pileta"


export function Revestimientos(){
    return(
        <div style={{paddingTop:'8rem', paddingBottom:'8rem'}} class="container-cards " >
            <Pileta img={assets.interior1} titulo= 'Interior' texto='Trabajo realizado con cerecita y marmol' ruta='/NuestrosTrabajos/Interior' />
            <Pileta img={assets.detallado} titulo= 'Detallado' texto='Trabajo realizado con cerecita y marmol' ruta='/NuestrosTrabajos/Detallado' />
            <Pileta img={assets.exterior} titulo= 'Exterior' texto='Trabajo realizado con material atermico' ruta='/NuestrosTrabajos/Exterior' />
            <Pileta img={assets.portadabaño3} titulo= 'Baños' texto='Trabajos realizado en marmol y simil-madera' ruta='/NuestrosTrabajos/Baños' />
            <Pileta img={assets.interiorn2} titulo= 'Interior 2' texto='Trabajos realizado en marmol y simil-madera' ruta='/NuestrosTrabajos/Interior2' />
            <Pileta img={assets.interior3} titulo= 'Interior 3' texto='Trabajos realizado en marmol y simil-madera' ruta='/NuestrosTrabajos/Interior3' />
        </div>

    )
}