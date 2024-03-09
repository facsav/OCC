import { ItemDetailCarrousel } from "./ItemDetailCarrousel";
import assets from "../assets/assets";
import React, { useEffect, useState } from 'react';

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

export function ItemDetail({ titulo, descLarga, imgPortada, listaDeAssets, tiempo, recuadre, ubicacion, cantImgCarrusel, desc1, desc2, desc3, imgdesc1, imgdesc2, imgdesc3}) {
  const [clickedIcons, setClickedIcons] = useState([]);
  const [portadaHeight, setPortadaHeight] = useState(0);
  
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
        //---- una opcion la altura de la portada

        // if (window.innerWidth > 600){
        // setPortadaHeight(descripcion.offsetHeight * 0.8);
        // }else{
        // setPortadaHeight(descripcion.offsetHeight * 1);
        // }
        //-------- segunda opcion
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

  //---------------------------------------- Tamaño contenedor portada --------------------------------
 


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
              <hr /></h3>
              <div id="contenedor-portada" style={{ height: `${portadaHeight}vh`}}>
                <img
                  src={imgPortada}
                  alt=""
                  id="Portada"
                  className="portada-img"
                />
              </div>
              <div className="carrusel">
                <div className="slider">
                  <button id="prev-slide" className="slide-button material-symbols-rounded">chevron_left</button>
                  <ItemDetailCarrousel array={listaDeAssets} cantImgCarrusel={cantImgCarrusel}/>
                  <button id="next-slide" className="slide-button material-symbols-rounded">chevron_right</button>
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

export default ItemDetail;