export function Pileta({ img, titulo, texto, ruta, color }) {
    const estiloTexto = {
      color: color,
    };
  
    return (
      <a href={ruta}>
        <div className="piletas">
          <img src={img} alt="" width="100%" height="auto" />
          <div className="intro">
            <h4 style={estiloTexto}>{titulo}</h4>
            <p style={estiloTexto}>{texto}</p>
          </div>
        </div>
      </a>
    );
  }
  