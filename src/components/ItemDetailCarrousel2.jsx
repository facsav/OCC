
export function ItemDetailCarrousel2 ({array, cantImgCarrusel, cambiarPortada}){
  return(
    <div className="lista-img" style={{ gridTemplateColumns: `repeat(${cantImgCarrusel}, 1fr)` }}>
      {array.map((asset, index) =>(
        <video src={asset} alt="" className="imagen-item" onClick={() => cambiarPortada(asset)}/>
      ))}
    </div>
  )
}