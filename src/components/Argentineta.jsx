import { ItemDetail } from "./ItemDetail";
import data from "../utils/pools";

export function Argentineta(){
    return(
        <ItemDetail 
        titulo={data.pools[2].name} 
        descLarga={data.pools[2].desc_larga} 
        imgPortada={data.pools[2].portada}
        listaDeAssets={data.pools[2].demas_fotos} />
    )
}
