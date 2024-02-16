

export function ItemDetailCarrousel ({array}){
    function cambiarPortada(nuevaImagen) {
        // Obtén el elemento de la portada
        var portadaImg = document.getElementById('Portada');
      
        // Cambia la fuente de la imagen de la portada
        portadaImg.src = nuevaImagen;
    }
      
    return(
      <div className="lista-img">
        {array.map((asset, index) => (
          <img src={asset} alt="" className="imagen-item" onClick={() => cambiarPortada(asset)}/>
        ))}
      </div>
    )
}