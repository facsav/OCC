import assets from "../assets/assets"
import { Pileta } from "./Pileta"


export function Piletas(){
    return(
        <div style={{paddingTop:'8rem'}} class="container-cards " >
            <Pileta img={assets.redondeta} titulo= 'Redondeta' texto='Trabajo realizado con cerecita y marmol'/>
            <Pileta img={assets.finlandesa} titulo= 'Finlandesa' texto='Trabajo realizado con cerecita y marmol'/>
            <Pileta img={assets.argentineta} titulo= 'Argentineta' texto='Trabajo realizado con cerecita y marmol' ruta='/ItemDetail' />
            <Pileta img={assets.fuente} titulo= 'Fuente' texto='Trabajo realizado con cerecita y marmol'/>
            <Pileta img={assets.clasica} titulo= 'Clasica' texto='Trabajo realizado con cerecita y marmol'/>
            <Pileta img={assets.lgbt} titulo= 'LGBT+' texto='Trabajo realizado con cerecita y marmol'/>
            <Pileta img={assets.adefinir} titulo= 'A definir' texto='Trabajo realizado con cerecita y marmol' ruta='/adefinir'/>
            <Pileta img={assets.escaloneta} titulo= 'Escaloneta' texto='Trabajo realizado con cerecita y marmol'/>
            <Pileta img={assets.eggs} titulo= 'Eggs' texto='Trabajo realizado con cerecita y marmol'/>

        </div>

    )
}