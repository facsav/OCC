import { ItemDetail } from "../ItemDetail";
import data from "../../utils/coatings";

export function Exterior(){
    return(
        <ItemDetail 
        titulo={data.coatings[2].name} 
        descLarga={data.coatings[2].desc_larga} 
        imgPortada={data.coatings[2].portada}
        listaDeAssets={data.coatings[2].demas_fotos} 
        tiempo={data.coatings[2].tiempo}
        recuadre={data.coatings[2].recuadre}
        ubicacion={data.coatings[2].ubicacion}
        cantImgCarrusel={data.coatings[2].demas_fotos.length}
        desc1={data.coatings[2].desc1}
        desc2={data.coatings[2].desc2}
        desc3={data.coatings[2].desc3} 
        imgdesc1={data.coatings[2].imgdesc1}
        imgdesc2={data.coatings[2].imgdesc2}
        imgdesc3={data.coatings[2].imgdesc3}/>
    )
}
