import { ItemDetail } from "../ItemDetail";
import data from "../../utils/pools";

export function Celeste(){
    return(
        <ItemDetail 
        titulo={data.pools[8].name} 
        descLarga={data.pools[8].desc_larga} 
        imgPortada={data.pools[8].portada}
        listaDeAssets={data.pools[8].demas_fotos}
        tiempo={data.pools[8].tiempo}
        recuadre={data.pools[8].recuadre}
        ubicacion={data.pools[8].ubicacion}
        cantImgCarrusel={data.pools[8].demas_fotos.length} />
    )
}
