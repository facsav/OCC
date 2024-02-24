import { ItemDetail } from "../ItemDetail";
import data from "../../utils/pools";

export function Argentineta(){
    return(
        <ItemDetail 
        titulo={data.pools[2].name} 
        descLarga={data.pools[2].desc_larga} 
        imgPortada={data.pools[2].portada}
        listaDeAssets={data.pools[2].demas_fotos}
        tiempo={data.pools[2].tiempo}
        recuadre={data.pools[2].recuadre}
        ubicacion={data.pools[2].ubicacion}
        cantImgCarrusel={data.pools[2].demas_fotos.length}
        desc1={data.pools[2].desc1}
        desc2={data.pools[2].desc2}
        desc3={data.pools[2].desc3} 
        imgdesc1={data.pools[2].imgdesc1}
        imgdesc2={data.pools[2].imgdesc2}
        imgdesc3={data.pools[2].imgdesc3}/>
    )
}
