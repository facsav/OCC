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
        cantImgCarrusel={data.pools[2].demas_fotos.length} />
    )
}
