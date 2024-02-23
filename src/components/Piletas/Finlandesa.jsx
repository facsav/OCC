import { ItemDetail } from "../ItemDetail";
import data from "../../utils/pools";

export function Finlandesa(){
    return(
        <ItemDetail 
        titulo={data.pools[1].name} 
        descLarga={data.pools[1].desc_larga} 
        imgPortada={data.pools[1].portada}
        listaDeAssets={data.pools[1].demas_fotos}
        tiempo={data.pools[1].tiempo}
        recuadre={data.pools[1].recuadre}
        ubicacion={data.pools[1].ubicacion}
        cantImgCarrusel={data.pools[1].demas_fotos.length} />
    )
}
