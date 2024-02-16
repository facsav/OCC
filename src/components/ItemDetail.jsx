import { ItemDetailCarrousel } from "./ItemDetailCarrousel";

export function ItemDetail({titulo, descLarga, imgPortada, listaDeAssets}){
    console.log("DALE LOCO", portada)

    const initSlider = () => {
        const imageList = document.querySelector(".slider .lista-img");
        const sildeButtons = document.querySelectorAll(".slider .slide-button");
        const maxScrollLeft = imageList.scrollWidht - imageList.clientWidth;
    
        sildeButtons.forEach(button => {
            button.addEventListener("click", () => {
                const direction = button.id === "prev-slide" ? -1 : 1;  
                const scrollAmount =  imageList.clientWidth * direction; 
                imageList.scrollBy({left: scrollAmount, behavior: "smooth"});
            });
        }); 
    
        const handleSlideButtons = () => {
            sildeButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
            sildeButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
        }
    
        imageList.addEventListener("scroll", () => {
            handleSlideButtons();
        });
    }
    window.addEventListener("load", initSlider);
    
    /** falta ver porque cuando llega al final del scroll no desaparece la flecha derecha */
    
    function cambiarPortada(nuevaImagen) {
        // Obtén el elemento de la portada
        var portadaImg = document.getElementById('Portada');
      
        // Cambia la fuente de la imagen de la portada
        portadaImg.src = nuevaImagen;
    }
      
    var portada = document.getElementById('Portada');
    var imgCarrusel = document.getElementsByClassName('imagen-item');

    
    
    return(
        <>
        
        <section style={{paddingTop:'15vh', height:'100vh'}}> {/* PONER EN CSS NO ACA EL STYLE */}
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-7" style={{marginTop: "1.5em;"}}>
                        <h3>{titulo}</h3>
                        <div id="contenedor-portada">
                            <img  src={imgPortada}  alt="" id="Portada"/>
                        </div>
                        <div className="carrusel">
                            <div className="slider">
                                {/* <button id="prev-slide" class="slide-button material-symbols-rounded">chevron_left</button> */}
                                <ItemDetailCarrousel array={[listaDeAssets]} />
                                {/* <button id="next-slide" className="slide-button material-symbols-rounded">chevron_right</button> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-5" style={{marginTop: "1.5em;"}}>
                        <h3 style={{color: "transparent"}}>{titulo}</h3>
                        <p id="descripcion">{descLarga}</p>
                    </div>
                </div>
            </div>
        </section>
        
        </>
    )
}