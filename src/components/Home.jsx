import assets from "../assets/assets";
import DarkMode from "./DarkMode";
import { Carrusel } from "./carrusel";
import { ContactUs } from "./contacto";

if (DarkMode){
    console.log("esta activo")
}


export function Home (){
    return(
    <>
        <div style={{height:'8vh'}} ></div>
        <section id="home" style={{backgroundImage:`url(${assets.homeBanner})`}}>
            <div className="container">
                <div className="row align-items-center">
                    <div className="col">
                        <h1 className="d-md-none">
                            Experiencia
                            <br/>
                            internacional
                        </h1>
                        <h3 className="d-md-none">en trabajos de precisión</h3>
                    </div>

                </div>
            </div>
            <img src={assets.homeBannerPhone} alt=""/>
        </section>

        <section id="home2">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2>¿A que nos dedicamos?</h2>
                        <div>
                            <p>Vorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex. Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in elementum tellus.</p>
                            <a className="btn btn-primary" href="">Nuestros Trabajos</a>
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