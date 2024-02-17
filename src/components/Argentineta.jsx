import { ItemDetail } from "./ItemDetail";
import assets from "../assets/assets"
import data from "../utils/pools";


// NO SE IMPORTAN LAS IMAGENES.
// PROBA TIRAR UN CONSOLE LOG CON EL IMPORT DE LAS IMG DESDE DATA

export function Argentineta(){

    console.log('aaca',data.pools[2].demas_fotos )
    return(
        <ItemDetail 
        titulo={data.pools[2].name} 
        descLarga={data.pools[2].desc_larga} 
        imgPortada={data.pools[2].portada}
        listaDeAssets={data.pools[2].demas_fotos} />
    )
}
