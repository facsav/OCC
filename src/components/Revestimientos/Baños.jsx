import { ItemDetail2 } from "../ItemDetail2";
import data from "../../utils/coatings";

export function Baños(){
    return(
        <ItemDetail2 
        titulo={data.coatings[3].name} 
        descLarga={data.coatings[3].desc_larga} 
        imgPortada={data.coatings[3].portada}
        listaDeAssets={data.coatings[3].demas_fotos} 
        tiempo={data.coatings[3].tiempo}
        recuadre={data.coatings[3].recuadre}
        ubicacion={data.coatings[3].ubicacion}
        cantImgCarrusel={data.coatings[3].demas_fotos.length}
        desc1={data.coatings[3].desc1}
        desc2={data.coatings[3].desc2}
        desc3={data.coatings[3].desc3} 
        imgdesc1={data.coatings[3].imgdesc1}
        imgdesc2={data.coatings[3].imgdesc2}
        imgdesc3={data.coatings[3].imgdesc3}/>
    )
}