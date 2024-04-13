import assets from "../assets/assets";
import '../styles/SobreNosotros.css'

export function SobreNosotros (){

    return(
        <>
        
            <section id="sobreNosotros">

                <div style={{paddingTop:'6rem'}} className="container">
                    <div className="row">
                        <div className="col">
                            <h1>Sobre Nosotros</h1>
                        </div>
                    </div>
                    <div className="row row1">
                        <div className="col-12 col-lg-6 imgStart img400 ">
                            <img src={assets.abasto} height='400px' alt="Imagen del abasto" />
                        </div>
                        <div className="col-12 col-lg-6">
                            <p>
                            A mediados del 96 junto a mi padre quien tanto conocimiento nos otorgó; desde las bases de la construcción yel revestimiento, como en su especialización en colocación de azulejos con cal, la construcción de frigoríficos y torres, comenzamos nuestro camino. <br />
                            Empezábamos en la construcción de las torres del abasto trabajando para una de las constructoras más importantes del país,Dinsa. En este proyecto trabajamos desde la estructura de las torres, hasta en el fino detalle del acabado de los revestimientos.
                            </p>
                        </div>
                    </div>

                    <div className="row row1">
                        <div className="col-12 col-lg-6 order-lg-1 order-2">
                        Trabajando en Dinsa tuvimos el privilegio de participar en la obra que daría apertura en el 98 a uno de los centros comerciales más importantes y con más historia, el Abasto Shopping. <br />
                        Los veredones de la reserva urbana de puerto Madero, y al año siguiente en el 2000, antes del estallido social, participamos en las reformas del aeropuerto de Ezeiza que conllevaron planta baja, primer piso y baños.

                        </div>
                        <div className="col-12 col-lg-6 order-lg-2 order-1 imgEnd img300">
                            <img src={assets.eze} height='300px' alt="Imagen del aeropuerto ezeiza" />
                        </div>
                    </div>

                    <div className="row row1">
                        <div className="col-12 col-lg-6 imgStart img300 ">
                            <img src={assets.miami2} height='300px' alt="Imagen de Coconut Grove" />
                        </div>
                        <div className="col-12 col-lg-6">
                            En el 2001 emprendimos un viaje a los Estados Unidos que duraría hasta el 2008, durante este período trabajamos para la constructora Kingston Holding, recorriendo lugares como Fishing Island, Coconut Grove, entre otros. Además trabajamos con xxx marmolera.
                        </div>
                    </div>

                    <div className="row row1">
                        <div className="col-12 col-lg-6 order-lg-1 order-2">
                        Al regresar a nuestra amada Argentina participamos en la construcción de Madero Center o "La Rosadita", este sobrenombre sería conocido luego del escándalo de la ruta del dinero K, un año más tarde en la construcción de las torres del Yacht, dejando así una zona de la capital bonaerense finalizada. <br />
                        No solo nos dedicamos a la construcción de proyecto masivos, también realizamos trabajos para hogares en countries como Boca Raton, San Diego, entre otros.

                        </div>
                        <div className="col-12 col-lg-6 order-lg-2 order-1 imgEnd img400">
                            <img src={assets.torres} height='400px' alt='Imagen de las torres "Yacht"' />
                        </div>
                    </div>

                    <div className="row row1">
                        <div className="col-12 col-lg-6  imgStart img300">
                            <img src={assets.terminal} height='300px' alt='Imagen de terminal C de Ezeiza"' />
                        </div>
                        <div className="col-12 col-lg-6">
                            En el 2011 tuvimos el privilegio de volver a reformar el aeropuerto de Ezeiza, esta vez en la sección C. Luego de esto nos dedicamos puramente a la construcción de hogares hasta el año 2018, donde nuevamente viajamos a los Estados Unidos.
                        </div>
                    </div>

                    <div className="row row1">
                        <div className="col-12 col-lg-6 order-lg-1 order-2">
                            Alli, comenzamos la dedicación y especialización a tiempo completo en los revestimientos trabajando en Orlando, Florida, Colorado, Miami, etc. Participamos en proyecto en Mármol, material de alta complejidad debido a su fragilidad, de la mano de Argenta Moitai. <br />
                            Durante estos años aprendimos a revestir en cualquier superficie, cal, cemento, vidrio, pvc, lo que fuera, tenemos no solo la experiencia y capacitación, si no la habilidad para revestir lo que usted desee, nuestro objetivo al volver en el 2023 a la Argentina es cumplir su sueño o visión, nada es imposible de revertir en OCC.
                        </div>
                        <div className="col-12 col-lg-6 order-lg-2 order-1 imgEnd img300">
                            <img src={assets.miami2} height='300px' alt='Imagen de Miami' />
                        </div>
                    </div>
                </div>
                
            </section>

        </>
    )


}