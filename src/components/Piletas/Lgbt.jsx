import { ItemDetail } from "../ItemDetail";
import data from "../../utils/pools";

export function Lgbt(){
    return(
        <ItemDetail 
        titulo={data.pools[5].name} 
        descLarga={data.pools[5].desc_larga} 
        imgPortada={data.pools[5].portada}
        listaDeAssets={data.pools[5].demas_fotos}
        tiempo={data.pools[5].tiempo}
        recuadre={data.pools[5].recuadre}
        ubicacion={data.pools[5].ubicacion}
        cantImgCarrusel={data.pools[5].demas_fotos.length}
        desc1={data.pools[5].desc1}
        desc2={data.pools[5].desc2}
        desc3={data.pools[5].desc3} 
        imgdesc1={data.pools[5].imgdesc1}
        imgdesc2={data.pools[5].imgdesc2}
        imgdesc3={data.pools[5].imgdesc3}/>
    )
}
