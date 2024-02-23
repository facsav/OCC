import { ItemDetail } from "../ItemDetail";
import data from "../../utils/pools";

export function Clasica(){
    return(
        <ItemDetail 
        titulo={data.pools[4].name} 
        descLarga={data.pools[4].desc_larga} 
        imgPortada={data.pools[4].portada}
        listaDeAssets={data.pools[4].demas_fotos}
        tiempo={data.pools[4].tiempo}
        recuadre={data.pools[4].recuadre}
        ubicacion={data.pools[4].ubicacion}
        cantImgCarrusel={data.pools[4].demas_fotos.length} />
    )
}
