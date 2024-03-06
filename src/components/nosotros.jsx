import { ItemDetailCarrousel } from "./ItemDetailCarrousel";
import assets from "../assets/assets";
import React, { useEffect, useState } from 'react';
import style from "../styles/nosotros.css";


export function Nosotros() {
    const estiloParrafo = {
        backgroundImage: `url('/images/prueba1.png')`,
        backgroundRepeat: 'no-repeat',
        // Otros estilos necesarios
      };
      const estiloParrafo2 = {
        backgroundImage: `url('/images/prueba2.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'auto',
        // Otros estilos necesarios
      };
      const estiloParrafo3 = {
        backgroundImage: `url('/images/prueba3.png')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'auto',
        // Otros estilos necesarios
      };

    const img1 = 'https://simplesolutionscloud.s3.sa-east-1.amazonaws.com/torresdelyacht/72b9b98d3548750fe8ebd8e259f45282e21d5ff4_1c7c5031aa_878.jpg';
    const img2 = '/images/img2.jpg';
    const img3 = '/images/img3.jpg';
    const img4 = '/images/img4.jpg';
    const img5 = 'https://www.rehau.com/resource/image/623600/7x5/600/428/70c5fddf4b3ce519d3301dce5dbbec2d/DF13E2BFFE85C856D103257962DD723E/madero-center-1200x888-105666.jpg';
    const img6 = 'https://undiaunaarquitecta.files.wordpress.com/2014/07/flora-manteola-estudio-msgsss-torres-del-yacht.jpg';
    const img7 = 'https://www.maderobrokers.com.ar/uploads/maderobrokers/images/1692575570d1nae-e876010b-be87-4dd3-ba46-97ec862dd678jpg.jpeg';

  return (
    <section style={{ paddingTop: '15vh', height: '100vh', paddingBottom: '10vh', height: 'auto' }}>
        <div className="container" id="nosotros">
            <div className="row">
                <div className="col">
			  <h4>Bienvenidos a OCC</h4>
                    <p>
                    A mediados del 96 junto a mi padre quien tanto conocimiento nos otorgó; desde las bases de la construcción yel revestimiento, como en su especialización en colocación de azulejos con cal, la construcción de frigoríficos y torres, comenzamos nuestro camino.</p>
                </div>
            </div>
            <div className="row">
                <div className="col img-sola" >
                    <img src={img1} alt="" />
                    <p style={estiloParrafo}>Empezábamos en la construcción de las <b>torres del abasto</b> trabajando para una de las constructoras más importantes del país, <a href="">Dinsa</a>. En este proyecto trabajamos desde la estructura de las torres, hasta en el fino detalle del acabado de los revestimientos.</p>
                </div>
            </div>
            <div className="row">
                <div className="col img-triple" >
                    <p><b>Trabajando en Dinsa</b> tuvimos el privilegio de participar en la obra que daría apertura en el 98 a uno de los centros comerciales más importantes y con más historia, el Abasto Shopping. 
                        Los veredones de<br/> la reserva urbana de puerto Madero, y al año siguiente en el 2000,<br/> antes del estallido social, participamos en las reformas del<br/>
                         aeropuerto de Ezeiza que conllevaron <br/> planta baja, primer piso <br/>y baños.</p>
                    <img src={img3} alt="" />
                    <img src={img2} alt="" />
                    <img src={img4} alt="" />
                </div>
            </div>
            <div className="row">
                <div className="col" >
                    <p style={estiloParrafo2}>
En el 2001 emprendimos un viaje alos estados unidos que duraría hasta el 2008, durante este periodo
trabajamos para la constructora Kingston Holding, recorriendo lugares como fishing island, coconut Grove, entre otros. Además trabajamos con xxx marmolera.
          </p>
                </div>
            </div>
            <div className="row">
                <div className="col img-doble" >
                    <p>
                        Al regresar a nuestra amada Argentina participamos en la construcción 
                        de Madero Center o "La Rosadita", este sobrenombre sería conocido luego del escándalo de la ruta del dinero K, un año más tarde en la construcción<br/> de las torres
                         del Yacht, dejando así una zona de la capital bonaerense <br/>finalizada. 
No solo nos dedicamos a la construcción de proyecto masivos, <br/>tambien realizamos trabajos para hogares en countries como Boca Raton, <br/>San Diego, entre otros.
                    </p>
                    <img src={img6} alt="" />
                    <img src={img5} alt="" />
                    <img src={img7} alt="" />
                </div>
            </div>
            <div className="row">
                <div className="col" >
                    <p style={estiloParrafo3}>
                        En el 2011 tuvimos el privilegio de volver a reformar el aeropuerto de Ezeiza, esta vez en la sección C. Luego de esto nos dedicamos puramente a la construcción de hogares
                        hasta el año 2018, donde nuevamente viajamos a los estados unidos donde comenzamos la dedicación y especialización a tiempo completo en los revestimientos trabajando en Orlando, Florida, Colorado, Miami,
                         etc. Participamos en proyecto en Mármol, material de alta complejidad debido a su fragilidad, de la mano de Argenta Moitai. <br />
                         <a className="btn btn-primary" href="/NuestrosTrabajos">Nuestros Trabajos</a> <br />
                    Durante estos años aprendimos a revestir en cualquier superficie, cal, cemento, vidrio, pvc, lo que fuera, tenemos no solo la experiencia y capacitación, si no la habilidad para revestir lo que usted desee, nuestro objetivo al volver en el 2023 a la Argentina es  cumplir su sueño o visión, nada es imposible de revertir en OCC.
                    </p>
            </div>
        </div>
        </div>
    </section>
  );
}

export default Nosotros;