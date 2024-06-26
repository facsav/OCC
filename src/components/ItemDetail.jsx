import { ItemDetailCarrousel } from "./ItemDetailCarrousel";
import assets from "../assets/assets";
import React, { useEffect, useState } from 'react';
import ReproductorVideos from "./reactselacome";
import itemDetail from "../styles/ItemDetail.css"

const Icono = ({ imagen, nombre, onClick }) => {

  const [clicked, setClicked] = useState(false);

  const toggleClickState = () => {
    setClicked(!clicked);
    onClick(); // Llama a la función de retorno de llamada proporcionada por el componente principal
  };

  return (
    <div className={`icono-container ${clicked ? 'clicked' : ''}`} onClick={toggleClickState}>
      <img src={imagen} alt="" className="iconos-p" />
      <span className="def-iconos"><p>{nombre}</p></span>
    </div>
  );
};

export function ItemDetail({ titulo, puentesDeAdherencia, caracteristicas, puentesDeAdherenciaLink, descLarga, imgPortada, listaDeAssets, tiempo, recuadre, ubicacion, cantImgCarrusel, desc1, desc2, desc3, imgdesc1, imgdesc2, imgdesc3}) {
  const [clickedIcons, setClickedIcons] = useState([]);
  const [portadaHeight, setPortadaHeight] = useState(0);
  const [tipoContenido, setTipoContenido] = useState('imagen');
  
  const parseText = (text) => {
    const parsedText = text.replace(/\*(.*?)\*/g, (_, p1) => `<strong>${p1}</strong>`)
                                 .replace(/_(.*?)_/g, (_, p1) => `<u>${p1}</u>`);

    return <p dangerouslySetInnerHTML={{ __html: parsedText }} />;
  };
  useEffect(() => {
    const initSlider = () => {
      const imageList = document.querySelector(".slider .lista-img");
      const sildeButtons = document.querySelectorAll(".slider .slide-button");
      const maxScrollLeft = imageList.scrollWidth - imageList.clientWidth;

      sildeButtons.forEach(button => {
        button.addEventListener("click", () => {
          const direction = button.id === "prev-slide" ? -1 : 1;
          const scrollAmount = imageList.clientWidth * direction;
          imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
        });
      });

      const handleSlideButtons = () => {
        sildeButtons[0].style.display = imageList.scrollLeft <= 0 ? "none" : "block";
        sildeButtons[1].style.display = imageList.scrollLeft >= maxScrollLeft ? "none" : "block";
      };

      imageList.addEventListener("scroll", () => {
        handleSlideButtons();
      });
    };

    initSlider();

    return () => {
      window.removeEventListener("load", initSlider);
    };

    
  }, []); 
  //--------------------------------------------------- Video/Imagen --------------------------------------- 
  useEffect(() => {
    const handleImageLoad = () => {
      const portadaImg = document.getElementById('Portada');
  
      if (portadaImg) {
        const extensionesVideo = ['.mp4', '.webm', '.ogg'];
        const url = portadaImg.src.toLowerCase();
  
        if (extensionesVideo.some(ext => url.endsWith(ext))) {
          setTipoContenido('video');
          console.log('Es video');
        } else {
          setTipoContenido('imagen');
          console.log('Es imagen');
        }
  
        // Resto de tu lógica de ajuste de altura y ancho
      }
    };
  
    const portadaImg = document.getElementById('Portada');
  
    if (portadaImg.complete) {
      handleImageLoad();
    } else {
      portadaImg.addEventListener('load', handleImageLoad);
    }
  
    return () => {
      portadaImg.removeEventListener('load', handleImageLoad);
    };
  }, [imgPortada]);
  //--------------------------------------------------- Logica scroll ----------------------------------
  useEffect(() => {
    const portadaImg = document.getElementById('Portada');
    const contenedorPortada = document.getElementById('contenedor-portada');
  
    const handleImageLoad = () => {
      const esMasAnchaQueAlta = portadaImg.naturalWidth > portadaImg.naturalHeight;
      const esMasAltaQueAncha = portadaImg.naturalHeight > portadaImg.naturalWidth;
      const esIgual = portadaImg.naturalHeight == portadaImg.naturalWidth;
      const descripcion = document.getElementById('descripcion');
  
      if (esMasAnchaQueAlta) {
        if (window.innerWidth > 600){
          setPortadaHeight(60);
          }else{
          setPortadaHeight(40);
          }
        contenedorPortada.style.overflowX = 'auto';
        contenedorPortada.style.overflowY = 'hidden';
        portadaImg.style.height = '100%';
        portadaImg.style.width = 'auto';

      } else if (esMasAltaQueAncha) {
        if (window.innerWidth > 600){
        setPortadaHeight(70);
        }else{
        setPortadaHeight(52);
        }
        contenedorPortada.style.overflowX = 'hidden';
        contenedorPortada.style.overflowY = 'auto';
        portadaImg.style.width = '100%';
        portadaImg.style.height = 'auto';
      } 
    };
    
    if (imgPortada.complete) {
      handleImageLoad();
    } else {
      portadaImg.addEventListener('load', handleImageLoad);
    }
    return () => {
      portadaImg.removeEventListener('load', handleImageLoad);
    };
  }, [imgPortada]);
  //---------------------------------------- Logica cambio de imagen --------------------------------
  function cambiarPortada(nuevaImagen) {
    const portadaImg = document.getElementById('Portada');
    portadaImg.src = nuevaImagen;
  }
  const handleIconClick = (iconIndex) => {
  };

  return (
    <>
      <section style={{ paddingTop: '15vh', height: '100vh', paddingBottom: '10vh', height: 'auto' }}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-7" style={{ marginTop: '1.5em' }}>
              <h3 id="titulo-pileta">{titulo} 
              {/* - {ubicacion} */}
              <hr /></h3>
              <div id="contenedor-portada" style={{ height: `${portadaHeight}vh`}}>
                {tipoContenido === 'imagen' ? (
                  <img src={imgPortada} alt="" id="Portada" className="portada-img" />
                ) : (
                  <ReproductorVideos />
                )}
              </div>

              <div className="carrusel">
                <div className="slider">
                  <button id="prev-slide" className="slide-button material-symbols-rounded">&lt;</button>
                  <ItemDetailCarrousel array={listaDeAssets} cantImgCarrusel={cantImgCarrusel}/>
                  <button id="next-slide" className="slide-button material-symbols-rounded">&gt;</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-5 descripcion" style={{ marginTop: "1.5em;" }}>
              <h3 style={{ color: "transparent" }}>{titulo}
              <hr /></h3>
              <h4>Preparación de superficie:</h4>
              <p>Nose lijado, pasar trapito con agua ... </p>
              <h4>Colocacion Puente de Adherencia:</h4>
              <p>El puente de adherencia se coloca sobre la superficie ya preparada de la piscina, luego se le hace un rallado, y se la deja reposar el tiempo indicado por el fabricante. </p>
              <div className="cont-button">
                {puentesDeAdherencia.map((puentesDeAdherencia, index) => (
                  <a href="#" key={index} style={{ display: 'block' }}>
                    {puentesDeAdherencia}
                  </a>
                ))}
              </div>
              <h4>Preparación de la Venecita:</h4>
              <p>Colocamos el pegamento sobre la venecita y sobre el puente de adherencia.</p>
              <div className="cont-button">
                {puentesDeAdherencia.map((puentesDeAdherencia, index) => (
                  <a href={puentesDeAdherenciaLink} key={index} style={{ display: 'block' }}>
                    {puentesDeAdherencia}
                  </a>
                ))}
              </div><h4>Colocación:</h4>
              <p>La venecita se coloca siguiendo el siguiente orden para lograr un acabado hermoso, suave y brillante: <br/>
                {'->'} Paredes iniciando desde el borde.<br/>
                {'->'} Escalera, nivelada apedido, con su acabado final, cuidando cada detalle.<br/>
                {'->'} Pisos.<br/>
                {'->'} Uniones y ransiciones. La union piso pared en piscinas de faldon curbo, y sobretodo en piscinas curvas como esta, es un punto critico, donde la experiencia en el detalle es la que asegura la suavidad y comodidad buscadas en un revestimiento de altisima calidad como este.</p>
              <div id="falopa">
                {/* Usar el componente Icono para cada ícono */}
                <Icono imagen={assets.ubicacion} nombre={ubicacion} onClick={() => handleIconClick(0)} />
                <Icono imagen={assets.reloj} nombre={tiempo} onClick={() => handleIconClick(1)} />
                <Icono imagen={assets.escuadra} nombre={recuadre} onClick={() => handleIconClick(2)} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
            <div class="container">
                <div class="row"> 
                    <div class="col-12 col-md-5 descripcion" style={{marginTop: '-10em'}}>
                      <h4>Caracteristicas generales:</h4>
                      <div className="cont-button2">
                        {caracteristicas.map((caracteristicas, index) => (
                          <p key={index} style={{ display: 'block' }}>
                            {caracteristicas}
                          </p>
                        ))}
                      </div>
                      <h4 style={{marginTop: '2em'}}>Consideracion y Cuidados:</h4>
                      <p>
                        {'->'} Fragilidad: <br />
                        Riesgos de ruptura al cortar {'->'} Solcuion, cuidar la temperatura de trabajo, mano firme pero cuidadosa con las heramientas, herramientas adecuadas. <br />
                        Riesgo de ruptura en la ciolocacion, si una seccion queda muy fragil,
                          por ejemplo por su finura o acabado en punta, el riesgo de ruptura enlña colocacion es altisimo, una mano experimentada es la unica solucion. <br /> <br />
                        {'->'} Pensaralguno mas para pileta, para pisos tengo mas.
                      </p>
                    </div>
                    <div class="col-12 col-md-7">
                      <div className="carrusel">
                        <div className="slider">
                          <button id="prev-slide" className="slide-button material-symbols-rounded">&lt;</button>
                          <ItemDetailCarrousel array={listaDeAssets} cantImgCarrusel={cantImgCarrusel}/>
                          <button id="next-slide" className="slide-button material-symbols-rounded">&gt;</button>
                        </div>
                      </div>
                            <a className="btn btn-primary" href="/nuestrosTrabajos">Nuestros Trabajos</a>
                      <div className="carrusel">
                        <div className="slider">
                          <button id="prev-slide" className="slide-button material-symbols-rounded">&lt;</button>
                          <ItemDetailCarrousel array={listaDeAssets} cantImgCarrusel={cantImgCarrusel}/>
                          <button id="next-slide" className="slide-button material-symbols-rounded">&gt;</button>
                        </div>
                      </div>
                            <a className="btn btn-primary" href="/nuestrosTrabajos">Nuestros Trabajos</a>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}

export default ItemDetail;