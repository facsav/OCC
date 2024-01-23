export function Pileta({img, titulo, texto, ruta}){

    return(
        <a href={ruta}>
            <div class="piletas">
                <img src={img} alt=""  width="100%" height="auto"/>
                <div class="intro">
                    <h4>{titulo}</h4>
                    <p>{texto}</p>
                </div>
            </div>
        </a>

    )




}