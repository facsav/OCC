import assets from "../assets/assets"
import { Pileta } from "./Pileta"


export function Revestimientos(){
    return(
        <div style={{paddingTop:'8rem', paddingBottom:'8rem'}} class="container-cards " >
                        <Pileta img={assets.interior1} titulo= 'Interior' texto='Trabajo realizado con cerecita y marmol' ruta='/NuestrosTrabajos/Interior' />
            <Pileta img={assets.detallado} titulo= 'Detallado' texto='Trabajo realizado con cerecita y marmol' ruta='/NuestrosTrabajos/Detallado' />
            <Pileta img={assets.exterior} titulo= 'Exterior' texto='Trabajo realizado con cerecita y marmol' ruta='/NuestrosTrabajos/Exterior' />
            <Pileta img={assets.portadabaño2} titulo= 'Baño 2' texto='Trabajo realizado en marmol y simil-madera' ruta='/NuestrosTrabajos/Baño-2' />
            <Pileta img={assets.portadabaño3} titulo= 'Baño 3' texto='Trabajo realizado en marmol y simil-madera' ruta='/NuestrosTrabajos/Baño-3' />
        </div>

    )
}