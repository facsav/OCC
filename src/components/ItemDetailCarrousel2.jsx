

export function ItemDetailCarrousel2 ({array, cantImgCarrusel, cambiarPortada}){
    function cambiarPortada(nuevaImagen) {
        // Obtén el elemento de la portada
        var portadaImg = document.getElementById('Portada');
      
        // Cambia la fuente de la imagen de la portada
        portadaImg.src = nuevaImagen;
    }
      
    return(
      <div className="lista-img" style={{ gridTemplateColumns: `repeat(${cantImgCarrusel}, 1fr)` }}>
        {array.map((asset, index) =>(
          <video src={asset} alt="" className="imagen-item" onClick={() => cambiarPortada(asset)}/>
        ))}
      </div>
    )
}