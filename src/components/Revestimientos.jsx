import assets from "../assets/assets";
import CardAnimada from "./CardAnimada";


export function Revestimientos(){
    return(
        <div style={{paddingTop:'8rem', paddingBottom:'8rem'}} class="container-cards " >
            <CardAnimada img={assets.interior1} titulo= 'Interior' texto='Trabajo realizado con cerecita y marmol' ruta='/NuestrosTrabajos/Interior' />
            <CardAnimada img={assets.interior3} titulo= 'Interior 2' texto='Trabajos realizado en porcelanato' ruta='/NuestrosTrabajos/Interior3' />
            <CardAnimada img={assets.detallado} titulo= 'Detallado' texto='Trabajo realizado con cerecita y marmol' ruta='/NuestrosTrabajos/Detallado' />
            <CardAnimada img={assets.exterior} titulo= 'Exterior' texto='Trabajo realizado con material atermico' ruta='/NuestrosTrabajos/Exterior' />
            <CardAnimada img={assets.interiorn2} titulo= 'Interior 3' texto='Revestimiento interno de porcelanato' ruta='/NuestrosTrabajos/Interior2' />
            <CardAnimada img={assets.portadabaño3} titulo= 'Baños' texto='Trabajos realizado en marmol y simil-madera' ruta='/NuestrosTrabajos/Baños' />
        </div>

    )
}