import assets from "../assets/assets";
import DarkMode from "./DarkMode";

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

        <section id="contact">
            <div className="container">
            <div id="contact" className="container contact">
            <hr />
            <header id="contactContainer" class="row align-items-center header justify-content-center">
                <div style={{height:'100%'}} class="rightContact col-md-4 col-8 text-start d-grid align-items-center">
                    <div className="title_container">
                        <h2 class="">
                            Contact information
                        </h2>

                        <p>Fill up the form and out team 
                            <br/>
                            will get back to you within 24 hours.
                        </p>
                    </div>

                    <ul class="">
                        <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-telephone-fill" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                        </svg>

                        <span style={{margin:'10px'}}>
                            +453 415 331
                        </span>

                        </li>
                        <br />
                        <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                        </svg>
                            <span style={{margin:'10px'}}>
                                3saero@gmail.com
                            </span>
                        </li>
                        <br />
                        <li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                            <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                        </svg>
                        <span style={{margin:'10px'}}>
                            98213 Thiel Turnpike Apt. 663
                        </span>
                            
                        </li>
                    </ul>
                </div>

                <div className="leftContact col-md-5 col-8">
                    <div className="d-grid justify-content-center align-items-center">
                        <form action="">
                            <br />
                            <p style={{marginLeft:'10px'}} >Place your information here!</p>

                            <div className="container">

                                <div className="row">
                                    <div className="col">
                                        <label>Name</label>
                                        <br />
                                        <input type="text" name="name" placeholder="Shawn"/>
                                    </div>
                                    <div className="col">
                                        <label>Last Name</label>
                                        <br />
                                        <input type="text" name="lastName" placeholder="Smith"/>
                                    </div>
                                </div>
                                
                                <div className="row">
                                    <div className="col">
                                        <label>Phone</label>
                                        <br />
                                        <input type="tel" name="phone" id="" placeholder="1-(408)-111-1111"/>
                                    </div>
                                    <div className="col">
                                        <label>Mail</label>
                                        <br />
                                        <input type="email" name="email" id="" placeholder="myemail@email.com"/>
                                    </div>
                                </div>
                                <br className="d-none d-md-block" />
                                <br className="d-none d-md-block" />
                                <div className="row">
                                    <div className="col">
                                        <label>Leave us a message</label>
                                        <br />
                                        <input type="text" name="" id="" value='' style={{width:'100%'}} placeholder='"I´m looking for this ... "' />
                                    </div>
                                </div>
                                <br className="d-none d-md-block" />
                                <br />
                                <div className="row">
                                    <div className="col">
                                        <button id="boton2" className="btn btn-primary">Send</button>
                                    </div>
                                </div>

                            </div>
                            

                        </form>
                    </div>
                </div>
            </header>
        </div>
            </div>            
        </section>
    </> 
    )
}