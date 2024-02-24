import { ItemDetail } from "../ItemDetail";
import data from "../../utils/pools";

export function Redondeta(){
    return(
        <ItemDetail 
        titulo={data.pools[0].name} 
        descLarga={data.pools[0].desc_larga} 
        imgPortada={data.pools[0].portada}
        listaDeAssets={data.pools[0].demas_fotos}
        tiempo={data.pools[0].tiempo}
        recuadre={data.pools[0].recuadre}
        ubicacion={data.pools[0].ubicacion}
        cantImgCarrusel={data.pools[0].demas_fotos.length}
        desc1={data.pools[0].desc1}
        desc2={data.pools[0].desc2}
        desc3={data.pools[0].desc3}
        imgdesc1={data.pools[0].imgdesc1}
        imgdesc2={data.pools[0].imgdesc2}
        imgdesc3={data.pools[0].imgdesc3} />
    )
}
