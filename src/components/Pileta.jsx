export function Pileta({ img, titulo, texto, ruta, color }) {
    const estiloTexto1 = {
      color: color,
      fontSize: '21px',
    };
    const estiloTexto2 = {
      color: color,
      fontSize: '16px',
    };
  
    return (
      <a href={ruta}>
        <div className="piletas">
          <img src={img} alt="" width="100%" height="auto" />
          <div className="intro">
            <h1 style={estiloTexto1}>{titulo}</h1>
            <h4 style={estiloTexto2}>{texto}</h4>
          </div>
        </div>
      </a>
    );
  }
  