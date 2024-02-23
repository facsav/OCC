import { ItemDetail } from "../ItemDetail";
import data from "../../utils/pools";

export function Escaloneta(){
    return(
        <ItemDetail 
        titulo={data.pools[7].name} 
        descLarga={data.pools[7].desc_larga} 
        imgPortada={data.pools[7].portada}
        listaDeAssets={data.pools[7].demas_fotos}
        tiempo={data.pools[7].tiempo}
        recuadre={data.pools[7].recuadre}
        ubicacion={data.pools[7].ubicacion}
        cantImgCarrusel={data.pools[7].demas_fotos.length} />
    )
}
