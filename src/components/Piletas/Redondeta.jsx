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
        cantImgCarrusel={data.pools[0].demas_fotos.length} />
    )
}
