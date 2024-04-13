import assets from "../assets/assets";
import '../styles/SobreNosotros.css'

export function SobreNosotros (){

    return(
        <>
        
            <section id="sobreNosotros">

                <div style={{paddingTop:'6rem'}} className="container">
                    <div className="row">
                        <div className="col">
                            <br />
                            <h1>Sobre Nosotros</h1>
                            <br />
                            <br />
                        </div>
                    </div>
                    <div className="row row1">
                        <div class="ellipse"></div>
                        <div class="ellipse-2"></div>
                        <div class="ellipse-3"></div>
                        <div className="col-12 col-lg-6 imgStart img400 ">
                            <img src={assets.abasto} height='400px' alt="Imagen del abasto" />
                        </div>
                        <div className="col-12 col-lg-6">
                            <h3>
                                96’ - 97’
                            </h3>
                            <p>
                            A mediados del 96 junto a mi padre quien tanto conocimiento nos otorgó; desde las bases de la <b>construcción</b> y el <b>revestimiento</b>, como en su especialización en colocación de azulejos con cal, la construcción de frigoríficos y torres, comenzamos nuestro camino. <br />
                            Empezábamos en la construcción de las <b>torres del abasto</b> trabajando para una de las constructoras más importantes del país, <b>Dinsa</b>. En este proyecto trabajamos desde la estructura de las torres, hasta en el fino detalle del acabado de los revestimientos.
                            </p>
                        </div>
                    </div>

                    <div className="row row1">
                        <div className="col-12 col-lg-6 order-lg-1 order-2">
                        <h3>
                            98’ - 00’
                        </h3>
                        <p> 
                        Trabajando en <b>Dinsa</b> tuvimos el privilegio de participar en la obra que daría apertura en el 98 a uno de los centros comerciales más importantes y con más historia, el <b>Abasto Shopping</b>. <br />
                        Los veredones de la <b>reserva urbana de puerto Madero</b>, y al año siguiente en el 2000, antes del estallido social, participamos en las reformas del aeropuerto de <b>Ezeiza</b> que conllevaron planta baja, primer piso y baños.
                        </p>

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
                            <h3>
                                01’ - 08’
                            </h3>
                            <p>
                            En el 2001 emprendimos un viaje a los <b>Estados Unidos</b> que duraría hasta el 2008, durante este período trabajamos para la constructora <b>Kingston Holding</b>, recorriendo lugares como Fishing Island, Coconut Grove, entre otros. Además trabajamos con <b>xxx marmolera</b>.
                            </p>
                        </div>
                    </div>

                    <div className="row row1">
                        <div className="col-12 col-lg-6 order-lg-1 order-2">
                            <h3>
                                08’ - 10’
                            </h3>
                            <p>
                                Al regresar a nuestra amada <b>Argentina</b> participamos en la construcción de <b>Madero Center</b> o "La Rosadita", este sobrenombre sería conocido luego del escándalo de la ruta del dinero K, un año más tarde en la construcción de <b>las torres del Yacht</b>, dejando así una zona de la capital bonaerense finalizada. <br />
                                No solo nos dedicamos a la construcción de proyecto masivos, también realizamos trabajos para hogares en countries como <b>Boca Raton, San Diego,</b> entre otros.
                            </p>

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
                            <h3>
                                11’ - 18’
                            </h3>
                            <p>    
                                En el 2011 tuvimos el privilegio de volver a reformar el aeropuerto de <b>Ezeiza</b>, esta vez en la <b>sección C</b>. Luego de esto nos dedicamos puramente a la <b>construcción de hogares</b> hasta el año 2018, donde nuevamente viajamos a los <b>Estados Unidos</b>.
                            </p>
                        </div>
                    </div>

                    <div className="row row1">
                        <div className="col-12 col-lg-6 order-lg-1 order-2">
                            <h3>
                                18’ - 23’
                            </h3>
                            <p>
                                Alli, comenzamos la dedicación y especialización a <b>tiempo completo</b> en los revestimientos trabajando en <b>Orlando, Florida, Colorado, Miami</b>, etc. Participamos en proyecto en <b>Mármol</b>, material de alta complejidad debido a su fragilidad, de la mano de <b>Argenta Moitai.</b> <br />
                                Durante estos años aprendimos a <b>revestir en cualquier superficie</b>, cal, cemento, vidrio, pvc, lo que fuera, tenemos no solo la <b>experiencia</b> y <b>capacitación</b>, si no la <b>habilidad</b> para revestir lo que usted desee, nuestro objetivo al volver en el 2023 a la Argentina es <b>cumplir su sueño</b> o visión, <b>nada es imposible de revestir en OCC</b>.
                            </p>
                        </div>
                        <div className="col-12 col-lg-6 order-lg-2 order-1 imgEnd img300">
                            <img src={assets.miami} height='300px' alt='Imagen de Miami' />
                        </div>
                    </div>
                </div>
                
            </section>

        </>
    )


}