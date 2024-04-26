import { ItemDetailCarrousel } from "./ItemDetailCarrousel";
import { ItemDetailCarrousel2 } from "./ItemDetailCarrousel2";
import assets from "../assets/assets";
import React, { useEffect, useState, useRef } from 'react';
import ReproductorVideos from "./reactselacome";

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

export function ItemDetail2({ titulo, descLarga, imgPortada, listaDeAssets, tiempo, recuadre, ubicacion, cantImgCarrusel, desc1, desc2, desc3, imgdesc1, imgdesc2, imgdesc3}) {
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
  //---------------------------------------- Logica cambio de imagen --------------------------------
  
  const handleIconClick = (iconIndex) => {
  };
  const [videoPortada, setVideoPortada] = useState(imgPortada);
  const imgRef = useRef(null);
  useEffect(() => {
    imgRef.current = document.getElementById('portada');
  }, []);

  const cambiarPortada = (nuevaImagen) => {
    setVideoPortada(nuevaImagen);
  };

  const prueba =()=>{
    console.log(videoPortada)
    setVideoPortada('/baños/baño-2.mp4')
  }
  return (
    <>
      <section style={{ paddingTop: '15vh', height: '100vh', paddingBottom: '10vh', height: 'auto' }}>
        <div className="container">
          <div className="row">
          <div className="col-12 col-md-7" style={{ marginTop: '1.5em' }}>
      <h3 id="titulo-pileta">{titulo}<hr /></h3>
      <div id="contenedor-portada-videos">
        <ReproductorVideos key={videoPortada} video={videoPortada} />
      </div>
      <div className="carrusel">
        <div className="slider">
          <button id="prev-slide" className="slide-button material-symbols-rounded">&lt;</button>
          <ItemDetailCarrousel2
            array={listaDeAssets}
            cantImgCarrusel={cantImgCarrusel}
            cambiarPortada={cambiarPortada}
          />
          <button id="next-slide" className="slide-button material-symbols-rounded">&gt;</button>
        </div>
      </div>
    </div>
    <div className="col-12 col-md-5" style={{ marginTop: "1.5em;" }}>
              <h3 style={{ color: "transparent" }}>{titulo}
              <hr /></h3>
              <p id="descripcion">{parseText(descLarga)}</p>
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
            <div class="container piscina-description">
                <div class="row">
                    <div class="col-12 col-md-6">
                        <img src={imgdesc1} alt="" />
                    </div>
                    <div class="col-12 col-md-6">
                        <strong>{desc1}</strong>
                    </div>
                </div>
                <div class="row">
                    {/* ONLY ON PHONE */}
                    <div class="col-12 col-md-6 d-md-none d-block">  
                        <img src={imgdesc2} alt="" />
                    </div>

                    <div class="col-12 col-md-6  ">
                        <strong>{desc2}</strong>
                    </div>
                    <div class="col-12 col-md-6 d-md-block d-none">  
                        <img src={imgdesc2} alt="" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 col-md-6">
                        <img src={imgdesc3} alt="" />
                    </div>
                    <div class="col-12 col-md-6">
                        <strong>{desc3}</strong>
                    </div>
                </div>
            </div>
        </section>
    </>
  );
}

export default ItemDetail2;