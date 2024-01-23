import assets from "../../assets/assets";

export function ItemDetail(){

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
    var alturaPortada = portada.offsetHeight;
    var alturaImgCarrusel = alturaPortada / 4;
    
    // Recorre la colección de elementos con la clase 'imagen-item'
    for (var i = 0; i < imgCarrusel.length; i++) {
      imgCarrusel[i].style.height = alturaImgCarrusel + 'px';
    }
    
    var contenedorPortada = document.getElementById('contenedor-portada');
    var descripcionPortada = document.getElementById('descripcion');
    var heightDescripcion = descripcionPortada.offsetHeight + 'px';
    contenedorPortada.style.height = heightDescripcion;
    window.onload = function () {
        if (portada.width > portada.height) {
            portada.style.height = '100%';
            portada.style.width = 'auto';
        } else if (portada.height > portada.width){
            portada.style.width = '100%';
            portada.style.height = 'auto';
        }
    }
    
    
    return(
        <>
        
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-12 col-md-7" style={{marginTop: "1.5em;"}}>
                        <h3>Argentineta</h3>
                        <div id="contenedor-portada"><img src={assets.portadaARG} alt="" id="Portada"/></div>
                        <div class="carrusel">
                            <div class="slider">
                                <button id="prev-slide" class="slide-button material-symbols-rounded">chevron_left</button>
                                <div class="lista-img">
                                    <img src={assets.portadaARG} alt="" class="imagen-item" onclick= {cambiarPortada(assets.portadaARG)}/>
                                    <img src={assets.decote} alt="" class="imagen-item" onclick= {cambiarPortada(assets.decote)}/>
                                    <img src={assets.jaquzzi} alt="" class="imagen-item" onclick= {cambiarPortada(assets.jaquzzi)}/>
                                </div>
                                <button id="next-slide" class="slide-button material-symbols-rounded">chevron_right</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-5" style={{marginTop: "1.5em;"}}>
                        <h3 style={{color: "transparent"}}>Argentineta</h3>
                        <p id="descripcion">Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, <br/>metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. <br/><br/>Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus. Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. </p>
                    </div>
                </div>
            </div>
        </section>
        
        </>
    )
}