import assets from "../assets/assets";
import DarkMode from "./DarkMode";
import { Carrusel } from "./carrusel";
import { ContactUs } from "./ContactUs";
import React, { useState, useEffect } from 'react';
import home from '../styles/Home.css'
import {Helmet} from 'react-helmet';
import { useNavigate } from 'react-router-dom';

if (DarkMode){
    console.log("esta activo")
}


export function Home (){
    const [backgroundPosition, setBackgroundPosition] = useState(0);
     const [showFirstImage, setShowFirstImage] = useState(true);
     const navigate  = useNavigate();

     const redirigirTrabajos = () => {
      navigate ('/NuestrosTrabajos'); // Redirige a la ruta /about
    };

    // useEffect(() => {
    //   const interval = setInterval(() => {
    //     // Alternar entre las dos imágenes
    //     setShowFirstImage((prevShowFirstImage) => !prevShowFirstImage);
    //   }, 5000);
  
    //   return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
    // }, []);
  
    const sectionStyle = {
      backgroundImage: `url(${showFirstImage ? assets.homeBanner : assets.homeBanner2})`,
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
    <Helmet>
      <meta
      name="description"
      content="OCC Revestimientos: Expertos en instalación de mármol, porcelanato y venecitas. Calidad y precisión en cada proyecto. Más de 13 años de experiencia transformando espacios con acabados duraderos y estéticos."
      />
      <title>OCC Colocación de revestimientos</title>
    </Helmet>
        <div style={{height:'8vh'}} ></div>
        <section id="home" style={sectionStyle}>
          <div className="container h-100">
            <div className="row align-items-center h-100">
              <div className="col-sm-12 col-md-6 justify-content-center">
                <div id="cont-banner">
                  <h1>Colocación de <br /> revestimientos</h1>
                  <p>Expertos en la instalación de revestimientos de alta calidad.
                     Transformamos cualquier espacio con mármol, porcelanato, venecitas y más,
                      ofreciendo soluciones duraderas para proyectos residenciales y comerciales.
                  </p>
                  <button onClick={redirigirTrabajos}>Conocer Más</button>
                  <button>¡Consultanos!</button>
                </div>
              </div>
            </div>
          </div>
          <img src={assets.homeBannerPhone} alt="" />
    </section>
    <div className="caracteristicasOcc">
      <div><img src="/images/reloj.webp" alt="lupa" />Máxima eficiencia</div>
      <div><img src="/images/ondas.webp" alt="ondas" />Acabados más suaves</div>
      <div><img src="/images/lupa.webp" alt="reloj" />Especializados en el detalle</div>
    </div>
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
        <section id="home3">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6" id="porque">
                <h2>¿Porque revestir tu piscina?</h2>
                <p>Revestir las superficies de tu hogar no solo añade un toque moderno y elegante,
                     sino que también protege tus paredes y pisos contra el desgaste.
                      Con la elección de materiales adecuados, puedes transformar cualquier espacio
                       en uno funcional y visualmente atractivo.</p>
                <ul>
                <li>
                    <h4>Durabilidad:</h4>
                    <p>
                    Protege las paredes de tu piscina contra el desgaste y la corrosión.
                    </p>
                    <strong>
                    <b>Durabilidad:</b> Protege contra el desgaste y la corrosión.  
                    </strong>  
                  </li>
                  <li>
                    <h4>Fácil mantenimiento:</h4>
                    <p>
                    Superficies más lisas que facilitan la limpieza y reducen la acumulación de suciedad.
                    </p>
                    <strong>
                    <b>Fácil mantenimiento:</b> Superficies más lisas, menos suciedad, limpieza más facil.
                    </strong>  
                  </li>
                  <li>
                    <h4>Estética:</h4>
                    <p>
                    Mejora visualmente tu espacio, haciéndolo más atractivo y moderno.                   
                    </p>
                    <strong>
                      <b>Estética:</b> Espacios más atractivos y modernos.
                    </strong>  
                  </li>
                  <li>
                    <h4>Ahorro en costos:</h4>
                    <p>
                    Evita reparaciones mayores al prevenir daños estructurales.
                    </p>  
                    <strong>
                    <b>Ahorro en costos:</b> Evita reparaciones por daños estructurales.
                    </strong>
                  </li>
                  <li>
                    <h4>Seguridad:</h4>
                    <p>
                    Superficies antideslizantes que minimizan riesgos de accidentes.
                    </p>  
                    <strong>
                      <b>Seguridad:</b> Superficies antideslizantes, menos accidentes.
                    </strong>
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-6">
                <img src="/images/Piscinas/piscina con jacuzzi.webp" alt="" />
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <h2>¿Porque revestir tu hogar?</h2>
                <p>Revestir las superficies de tu hogar no solo añade un toque moderno y elegante,
                     sino que también protege tus paredes y pisos contra el desgaste.
                      Con la elección de materiales adecuados, puedes transformar cualquier espacio
                       en uno funcional y visualmente atractivo.</p>
                <ul>
                <li>
                    <h4>Protección:</h4>
                    <p>
                    Protege tus superficies de la humedad, el desgaste y otros daños.
                    </p>  
                    <strong>
                      <b>Protección:</b> Protege contra la humedad, el desgaste y otros daños.
                    </strong>
                  </li>
                  <li>
                    <h4>Estética renovada:</h4>
                    <p>
                    Mejora el aspecto de tus interiores con acabados de alta calidad.
                    </p>  
                    <strong>
                      <b>Estética renovada:</b> Mejora tus interiores con acabados de alta calidad.
                    </strong>
                  </li>
                  <li>
                    <h4>Durabilidad:</h4>
                    <p>
                    Aumenta la vida útil de las paredes y pisos.                    
                    </p>  
                    <strong>
                      <b>Durabilidad:</b> Aumenta la vida útil de las paredes y pisos. 
                    </strong>
                  </li>
                  <li>
                    <h4>Fácil limpieza:</h4>
                    <p>
                    Superficies más resistentes a manchas y fáciles de mantener.
                    </p>  
                    <strong>
                      <b>Fácil limpieza:</b> Superficies menos absorbentes y fáciles de mantener.
                    </strong>
                  </li>
                  <li>
                    <h4>Aumento del valor:</h4>
                    <p>
                    Incrementa el valor de tu hogar con revestimientos de materiales duraderos y atractivos.
                    </p> 
                    <strong>
                      <b>Aumento del valor:</b> Con materiales para revestir duraderos y atractivos.
                    </strong> 
                  </li>
                </ul>
              </div>
              <div className="col-12 col-md-6">
                <img src="/images/trabajos-en-porcelanato/piso-revestido-en-porcelanto-gris-acabado.webp" alt="" />
              </div>
            </div>
          </div>
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