import assets from "../assets/assets";
import CardAnimada from "./CardAnimada";
import data from "../utils/pools";
import { Helmet } from 'react-helmet'

export function ProcesoInstalacion(){
    return(
        
        <section style={{paddingTop:'6rem'}} >
            <Helmet>
                <title>Guía de Instalación de Revestimientos por OCC: Expertos en Calidad</title>
                <meta name="description" content="Aprende cómo OCC instala revestimientos de cerámicos, porcelanato, mármol y venecitas. Descubre nuestros métodos detallados y asegura resultados duraderos y de alta calidad." />
            </Helmet>
            <div className="container">

                <h1 style={{fontSize:'42px'}}>Colocación de revestimientos</h1>
                <hr />
                <p style={{maxWidth:'700px'}}>
                    <span>En esta sección les compartiremos cómo <strong>trabajamos</strong> en OCC.</span> <br />
                    <span>Mostraremos cómo se colocan los distintos <strong>revestimientos</strong> en diversas superficies.</span> <br />
                    <span>Desde la preparación de <strong>pisos</strong>, <strong>paredes</strong> y otras superficies, pasando por la aplicación del adherente,
                    hasta la nivelación final del <strong>revestimiento</strong> a colocar.</span>
                </p>


                <div class="container-cards" >
                    <a href='/colocacion-de-revestimientos/piscinas'>
                        <CardAnimada img={assets.redondeta} titulo= 'Revestimientos de piscinas.' texto={data.pools[0].desc_corta} color={data.pools[0].color} />
                    </a>
                    <a href='/colocacion-de-revestimientos/porcelanato-ceramica'>                    
                        <CardAnimada img={assets.interiorn2} titulo= 'Recubrimientos en porcelanato, cerámica y más.' texto={data.pools[1].desc_corta} color={data.pools[1].color} />
                    </a>
                    <a href='/colocacion-de-revestimientos/Mármol'>                    
                        <CardAnimada img={assets.marmol} titulo= 'Revestimientos en mármol.' texto={data.pools[2].desc_corta} color={data.pools[2].color} />
                    </a>
                </div>
            </div>
        </section>

    )
}