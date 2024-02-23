import { ItemDetail } from "../ItemDetail";
import data from "../../utils/pools";

export function Fuente(){
    return(
        <ItemDetail 
        titulo={data.pools[3].name} 
        descLarga={data.pools[3].desc_larga} 
        imgPortada={data.pools[3].portada}
        listaDeAssets={data.pools[3].demas_fotos}
        tiempo={data.pools[3].tiempo}
        recuadre={data.pools[3].recuadre}
        ubicacion={data.pools[3].ubicacion}
        cantImgCarrusel={data.pools[3].demas_fotos.length} />
    )
}
