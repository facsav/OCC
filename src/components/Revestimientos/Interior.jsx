import { ItemDetail } from "../ItemDetail";
import data from "../../utils/coatings";

export function Interior(){
    return(
        <ItemDetail 
        titulo={data.coatings[0].name} 
        descLarga={data.coatings[0].desc_larga} 
        imgPortada={data.coatings[0].portada}
        listaDeAssets={data.coatings[0].demas_fotos} 
        tiempo={data.coatings[0].tiempo}
        recuadre={data.coatings[0].recuadre}
        ubicacion={data.coatings[0].ubicacion}
        cantImgCarrusel={data.coatings[0].demas_fotos.length}/>
    )
}
