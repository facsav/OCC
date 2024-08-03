import assets from "../assets/assets";
import React, { useState, useEffect } from 'react';
import carrousel from '../styles/Carrousel.css'



export const Carrusel = () => {
  //flechitas
    const [direction, setDirection] = useState('right'); 
    const toggleDirection = () => {
      // Cambiar la dirección al hacer clic en el botón
      setDirection(direction === 'right' ? 'left' : 'right');
    };

  //carrusel
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for recuded motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", true);

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []); 
  

    return (
        <>
        <div className="scroller" data-direction={direction} data-speed="slow">
        <div className="scroller__inner">
            <img src='/images/Argentineta/portada.jpeg' alt=""/>
            <img src='/images/Fuente/fuente 2.jpeg' alt=""/>
            <img src='/images/Interiores/Portada.jpg' alt=""/>
            <img src='/images/Finlandesa/adentro.jpeg' alt=""/>
            <img src='/images/Escaloneta/detalle 2.jpeg' alt=""/>
            <img src='/images/Detallado/proceso.jpg' alt=""/>
        </div>
        </div>
         {/* Flecha izquierda */}
        <button onClick={toggleDirection} className="carrusel-button" id="left-button">{"<"}</button>

        {/* Flecha derecha */}
        <button onClick={toggleDirection} className="carrusel-button" id="right-button">{">"}</button>
  </>
    );
  };