import { ItemDetail } from "../ItemDetail";
import data from "../../utils/pools";

export function Adefinir(){
    return(
        <ItemDetail 
        titulo={data.pools[6].name} 
        descLarga={data.pools[6].desc_larga} 
        imgPortada={data.pools[6].portada}
        listaDeAssets={data.pools[6].demas_fotos} 
        tiempo={data.pools[6].tiempo}
        recuadre={data.pools[6].recuadre}
        ubicacion={data.pools[6].ubicacion}
        cantImgCarrusel={data.pools[6].demas_fotos.length}
        desc1={data.pools[6].desc1}
        desc2={data.pools[6].desc2}
        desc3={data.pools[6].desc3}
        imgdesc1={data.pools[6].imgdesc1}
        imgdesc2={data.pools[6].imgdesc2}
        imgdesc3={data.pools[6].imgdesc3}/>
    )
}
