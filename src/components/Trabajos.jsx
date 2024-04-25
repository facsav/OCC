import React, { useState } from 'react';

export function Trabajos({ imgs, titulo, texto, ruta, color }) {
  const [indiceImagen, setIndiceImagen] = useState(0);
  const [expanded, setExpanded] = useState(false);

  const cambiarImagen = (direccion) => {
    if (direccion === 'izquierda') {
      setIndiceImagen((prev) => (prev === 0 ? imgs.length - 1 : prev - 1));
    } else {
      setIndiceImagen((prev) => (prev === imgs.length - 1 ? 0 : prev + 1));
    }
  };

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  const estiloTexto = {
    color: color,
  };

  return (
    <div className={`trabajos ${expanded ? 'expanded' : ''}`} onClick={toggleExpansion}>
      <img src={imgs[indiceImagen]} alt="" />
      {expanded && (
        <>
          <button className="flecha-left" onClick={(e) => {e.stopPropagation(); cambiarImagen('izquierda')}}>&lt;</button>
          <button className="flecha-right" onClick={(e) => {e.stopPropagation(); cambiarImagen('derecha')}}>&gt;</button>
          <button onClick={toggleExpansion} className="cerrar">&times;</button>
        </>
      )}
      <div className="detalle">
            <div className="fecha">
              <h4 style={estiloTexto}><a href={ruta} target="_blank">{titulo}</a></h4>
            </div>
          </div>
    </div>
  );
}
