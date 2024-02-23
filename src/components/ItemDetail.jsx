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

export function ItemDetail({ titulo, descLarga, imgPortada, listaDeAssets, tiempo, recuadre, ubicacion, cantImgCarrusel }) {
  const [clickedIcons, setClickedIcons] = useState([]);
  const [portadaHeight, setPortadaHeight] = useState(0);
  useEffect(() => {
    const descripcion = document.getElementById('descripcion');
    if (descripcion) {
      setPortadaHeight(descripcion.offsetHeight * 0.8);
    }
  }, [imgPortada]);
  
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

    // Limpieza del evento al desmontar el componente
    return () => {
      window.removeEventListener("load", initSlider);
    };

    
  }, []); // El segundo argumento es un array vacío, asegurándonos de que este efecto se ejecute solo una vez al montar el componente

  useEffect(() => {
    // Lógica para determinar si la imagen de portada es más ancha que alta
    const portadaImg = document.getElementById('Portada');
    const contenedorPortada = document.getElementById('contenedor-portada');
  
    const handleImageLoad = () => {
      const esMasAnchaQueAlta = portadaImg.naturalWidth > portadaImg.naturalHeight;
      const esMasAltaQueAncha = portadaImg.naturalHeight > portadaImg.naturalWidth;
      const esIgual = portadaImg.naturalHeight == portadaImg.naturalWidth;
  
      if (esMasAnchaQueAlta) {
        // Si es más ancha, aplicar reglas para hacer scroll horizontal
        contenedorPortada.style.overflowX = 'auto';
        contenedorPortada.style.overflowY = 'hidden';
        portadaImg.style.height = parseInt(contenedorPortada.style.height) + 'px';
        portadaImg.style.width = 'auto';
        portadaImg.style.marginLeft = 'auto';
        portadaImg.style.marginRight = 'auto';
      } else if (esMasAltaQueAncha) {
        // Si es más alta, aplicar reglas para hacer scroll vertical
        contenedorPortada.style.overflowX = 'hidden';
        contenedorPortada.style.overflowY = 'auto';
        portadaImg.style.width = parseInt(contenedorPortada.style.width) + 'px';
        portadaImg.style.height = 'auto';
      } 
    };
  
    if (imgPortada.complete) {
      // La imagen ya está cargada
      handleImageLoad();
    } else {
      // La imagen aún no se ha cargado, agregamos un evento de carga
      portadaImg.addEventListener('load', handleImageLoad);
    }
  
    // Limpieza del evento al desmontar el componente
    return () => {
      portadaImg.removeEventListener('load', handleImageLoad);
    };
  }, [imgPortada]);

  function cambiarPortada(nuevaImagen) {
    // Puedes utilizar React para acceder al elemento en lugar de usar document.getElementById
    const portadaImg = document.getElementById('Portada');
    portadaImg.src = nuevaImagen;
  }
  const handleIconClick = (iconIndex) => {
    // Manejar el clic de un ícono individual aquí si es necesario
  };


                  // No se si esto queda
  const [zoom, setZoom] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseWheel = (event) => {
    event.preventDefault(); // Evita el desplazamiento predeterminado
    setZoom((prevZoom) => (event.deltaY > 0 ? prevZoom * 0.9 : prevZoom * 1.1));
  };

  const handleMouseMove = (event) => {
    event.preventDefault(); // Evita el desplazamiento predeterminado
    if (event.buttons === 1) {
      setPosition((prevPosition) => ({
        x: prevPosition.x + event.movementX,
        y: prevPosition.y + event.movementY,
      }));
    }
  };

  return (
    <>
      <section style={{ paddingTop: '15vh', height: '100vh', paddingBottom: '10vh', height: 'auto' }}>
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-7" style={{ marginTop: '1.5em' }}>
              <h3>{titulo}</h3>
              <div id="contenedor-portada" style={{ height: `${portadaHeight}px`}}>
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
              <h3 style={{ color: "transparent" }}>{titulo}</h3>
              <p id="descripcion">{descLarga}</p>
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
    </>
  );
}

export default ItemDetail;