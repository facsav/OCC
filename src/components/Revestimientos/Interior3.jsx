import { ItemDetail } from "../ItemDetail";
import data from "../../utils/coatings";

export function Interior3(){
    return(
        <ItemDetail 
        titulo={data.coatings[5].name} 
        descLarga={data.coatings[5].desc_larga} 
        imgPortada={data.coatings[5].portada}
        listaDeAssets={data.coatings[5].demas_fotos} 
        tiempo={data.coatings[5].tiempo}
        recuadre={data.coatings[5].recuadre}
        ubicacion={data.coatings[5].ubicacion}
        cantImgCarrusel={data.coatings[5].demas_fotos.length}
        desc1={data.coatings[5].desc1}
        desc2={data.coatings[5].desc2}
        desc3={data.coatings[5].desc3} 
        imgdesc1={data.coatings[5].imgdesc1}
        imgdesc2={data.coatings[5].imgdesc2}
        imgdesc3={data.coatings[5].imgdesc3}/>
    )
}
