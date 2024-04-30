import assets from "../assets/assets";
import DarkMode from "./DarkMode";
import { Carrusel } from "./carrusel";
import { ContactUs } from "./ContactUs";
import React, { useState, useEffect } from 'react';

if (DarkMode){
    console.log("esta activo")
}


export function Home (){
    const [backgroundPosition, setBackgroundPosition] = useState(0);
     const [showFirstImage, setShowFirstImage] = useState(true);
  
    useEffect(() => {
      const interval = setInterval(() => {
        // Alternar entre las dos imágenes
        setShowFirstImage((prevShowFirstImage) => !prevShowFirstImage);
      }, 5000);
  
      return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
    }, []);
  
    const sectionStyle = {
      backgroundImage: `url(${showFirstImage ? assets.homeBanner : assets.homeBanner2})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundColor: 'var(--background-color)',
      paddingTop: '6rem',
      height: '80vh',
      color: 'var(--text-color)',
      transition: 'background-image 1s ease-in-out', // Añadir transición
    };
    // Seguimiento publicidad
    useEffect(() => {
      // Agrega aquí el código del script del Google Tag Manager
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-16497254972';
      document.head.appendChild(script);
      if (typeof window !== 'undefined' && typeof window.dataLayer !== 'undefined') {
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'AW-16497254972');
    }

      return () => {
          // Elimina el script del DOM al desmontar el componente
          document.head.removeChild(script);
      };
  }, []);
    return(
    <>
        <div style={{height:'8vh'}} ></div>
        <section id="home" style={sectionStyle}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col">
            <h1 className="d-md-none">
              Experiencia
              <br />
              internacional
            </h1>
            <h3 className="d-md-none">en trabajos de precisión</h3>
          </div>
        </div>
      </div>
      <img src={assets.homeBannerPhone} alt="" />
    </section>

        <section id="home2">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>¿A que nos dedicamos?</h2>
                        <div>
                            <p>
                            En OCC, nos especializamos en la <b>perfección de revestimientos</b>, abarcando una amplia gama de superficies que van desde <b>paredes y suelos</b>, tanto internos como externos de hogares, hasta sofisticados revestimientos para <b>piscinas</b>. Nuestra destreza se refleja en la aplicación de <b>diversos métodos de adherencia</b>, como pegamento epoxi, Klaukol, cal entre otros, siempre garantizando la máxima durabilidad.
                            Trabajamos con el material de su preferencia, adaptándonos hábilmente al entorno en el que realizaremos la instalación. Nos enorgullece destacar la <b>precisión y finura</b> excepcionales de nuestros acabados.
                            En OCC, <b>no existen límites</b> cuando se trata de revestir superficies. Ya sea que esté planificando una renovación en su hogar o que sea un arquitecto buscando pericia en revestimientos, estamos aquí para superar sus expectativas. Contáctenos para cualquier consulta; en OCC, la consigna es clara: <b>¡no hay superficie que no pueda ser revestida!</b>

                            </p>
                            <a className="btn btn-primary" href="/nuestrosTrabajos">Nuestros Trabajos</a>
                        </div>
                    </div>
                </div>
            </div>

        </section>
        <section id="carrousel-home">
            <Carrusel/>
        </section>
        <section id="contact">
            <div className="container">
                <div id="contact" className="container contact">
                <hr />
                    <ContactUs/>
                </div>
            </div>            
        </section>
    </> 
    )
}