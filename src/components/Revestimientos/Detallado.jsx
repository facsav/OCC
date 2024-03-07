import { ItemDetail } from "../ItemDetail";
import data from "../../utils/coatings";

export function Detallado(){
    return(
        <ItemDetail 
        titulo={data.coatings[1].name} 
        descLarga={data.coatings[1].desc_larga} 
        imgPortada={data.coatings[1].portada}
        listaDeAssets={data.coatings[1].demas_fotos} 
        tiempo={data.coatings[1].tiempo}
        recuadre={data.coatings[1].recuadre}
        ubicacion={data.coatings[1].ubicacion}
        cantImgCarrusel={data.coatings[1].demas_fotos.length}
        desc1={data.coatings[1].desc1}
        desc2={data.coatings[1].desc2}
        desc3={data.coatings[1].desc3} 
        imgdesc1={data.coatings[1].imgdesc1}
        imgdesc2={data.coatings[1].imgdesc2}
        imgdesc3={data.coatings[1].imgdesc3}/>
    )
}
