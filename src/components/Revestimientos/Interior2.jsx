import { ItemDetail } from "../ItemDetail";
import data from "../../utils/coatings";

export function Interior2(){
    return(
        <ItemDetail 
        titulo={data.coatings[4].name} 
        descLarga={data.coatings[4].desc_larga} 
        imgPortada={data.coatings[4].portada}
        listaDeAssets={data.coatings[4].demas_fotos} 
        tiempo={data.coatings[4].tiempo}
        recuadre={data.coatings[4].recuadre}
        ubicacion={data.coatings[4].ubicacion}
        cantImgCarrusel={data.coatings[4].demas_fotos.length}
        desc1={data.coatings[4].desc1}
        desc2={data.coatings[4].desc2}
        desc3={data.coatings[4].desc3} 
        imgdesc1={data.coatings[4].imgdesc1}
        imgdesc2={data.coatings[4].imgdesc2}
        imgdesc3={data.coatings[4].imgdesc3}/>
    )
}
