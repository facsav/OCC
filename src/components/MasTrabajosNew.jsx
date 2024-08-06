import masTrabajosNew from '../styles/MasTrabajosNew.css';
import assets from "../assets/assets";
import { useEffect } from 'react';
import Modal from './Modal';
import data from "../utils/masTrabajos";

export function MasTrabajosNew() {


    return (
        <section id="masTrabajosNew">
            <div className="container">

                <div className="row">

                    <h1>Revestimientos</h1>
                    
                    <hr />

                    <h2>Piletas</h2>
                    <p>Trabajos con veneceitas</p>
                    <div style={{paddingTop:'1.13rem'}} class="container-cards " >

                        <Modal modal={8} img={data.pools[7].portada} titulo={data.pools[7].name} desc={data.pools[7].desc_corta} imgModal={data.pools[7].modal} />  
                        <Modal modal={12} img={data.pools[11].portada} titulo={data.pools[11].name} desc={data.pools[11].desc_corta} imgModal={data.pools[11].modal} />  
                        <Modal modal={14} img={data.pools[13].portada} titulo={data.pools[13].name} desc={data.pools[13].desc_corta} imgModal={data.pools[13].modal} />  
                        <Modal modal={1} img={data.pools[0].portada} titulo={data.pools[0].name} desc={data.pools[0].desc_corta} imgModal={data.pools[0].modal} esPrimero />  
                        <Modal modal={2} img={data.pools[1].portada} titulo={data.pools[1].name} desc={data.pools[1].desc_corta} imgModal={data.pools[1].modal} />  
                        <Modal modal={3} img={data.pools[2].portada} titulo={data.pools[2].name} desc={data.pools[2].desc_corta} imgModal={data.pools[2].modal} />  
                        <Modal modal={4} img={data.pools[3].portada} titulo={data.pools[3].name} desc={data.pools[3].desc_corta} imgModal={data.pools[3].modal} />  
                        <Modal modal={5} img={data.pools[4].portada} titulo={data.pools[4].name} desc={data.pools[4].desc_corta} imgModal={data.pools[4].modal} />  
                        <Modal modal={6} img={data.pools[5].portada} titulo={data.pools[5].name} desc={data.pools[5].desc_corta} imgModal={data.pools[5].modal} />  
                        <Modal modal={7} img={data.pools[6].portada} titulo={data.pools[6].name} desc={data.pools[6].desc_corta} imgModal={data.pools[6].modal} />  
                        <Modal modal={11} img={data.pools[10].portada} titulo={data.pools[10].name} desc={data.pools[10].desc_corta} imgModal={data.pools[10].modal} />  
                        <Modal modal={9} img={data.pools[8].portada} titulo={data.pools[8].name} desc={data.pools[8].desc_corta} imgModal={data.pools[8].modal}/>  
                        <Modal modal={10} img={data.pools[9].portada} titulo={data.pools[9].name} desc={data.pools[9].desc_corta} imgModal={data.pools[9].modal} />  
                        <Modal modal={13} img={data.pools[12].portada} titulo={data.pools[12].name} desc={data.pools[12].desc_corta} imgModal={data.pools[12].modal} />  
                        <Modal modal={15} img={data.pools[14].portada} titulo={data.pools[14].name} desc={data.pools[14].desc_corta} imgModal={data.pools[14].modal} />  
                        <Modal modal={16} img={data.pools[15].portada} titulo={data.pools[15].name} desc={data.pools[15].desc_corta} imgModal={data.pools[15].modal} />  

                    </div>

                    <hr />
                    <h2>Marmol</h2>
                    <p>Revestimientos realizados en marmol</p>

                    <div style={{paddingTop:'1.13rem'}} class="container-cards " >

                        <Modal modal={11} img={data.marmol[0].cara} titulo={data.marmol[0].name} desc={data.marmol[0].desc_corta} imgModal={data.marmol[0].portada} />
                        <Modal modal={12} img={data.marmol[1].cara} titulo={data.marmol[1].name} desc={data.marmol[1].desc_corta} imgModal={data.marmol[1].portada} />
                        <Modal modal={13} img={data.marmol[2].cara} titulo={data.marmol[2].name} desc={data.marmol[2].desc_corta} imgModal={data.marmol[2].portada} />
                        <Modal modal={14} img={data.marmol[3].cara} titulo={data.marmol[3].name} desc={data.marmol[3].desc_corta} imgModal={data.marmol[3].portada} />
                        <Modal modal={15} img={data.marmol[4].cara} titulo={data.marmol[4].name} desc={data.marmol[4].desc_corta} imgModal={data.marmol[4].portada} />
                        <Modal modal={16} img={data.marmol[5].cara} titulo={data.marmol[5].name} desc={data.marmol[5].desc_corta} imgModal={data.marmol[5].portada} />
                        <Modal modal={17} img={data.marmol[6].cara} titulo={data.marmol[6].name} desc={data.marmol[6].desc_corta} imgModal={data.marmol[6].portada} />
                        <Modal modal={18} img={data.marmol[7].cara} titulo={data.marmol[7].name} desc={data.marmol[7].desc_corta} imgModal={data.marmol[7].portada} />
                        <Modal modal={19} img={data.marmol[8].cara} titulo={data.marmol[8].name} desc={data.marmol[8].desc_corta} imgModal={data.marmol[8].portada} />
                        <Modal modal={20} img={data.marmol[9].cara} titulo={data.marmol[9].name} desc={data.marmol[9].desc_corta} imgModal={data.marmol[9].portada} />
                        <Modal modal={21} img={data.marmol[10].cara} titulo={data.marmol[10].name} desc={data.marmol[10].desc_corta} imgModal={data.marmol[10].portada} />
                        <Modal modal={22} img={data.marmol[11].cara} titulo={data.marmol[11].name} desc={data.marmol[11].desc_corta} imgModal={data.marmol[11].portada} />
                    </div>

                    <hr />
                    <h2>Porcelanato</h2>
                    <p>Revestimientos realizados en Porcelanato</p>

                    <div style={{paddingTop:'1.13rem'}} class="container-cards ">

                        <Modal modal={23} img={data.pisos[0].cara} titulo={data.pisos[0].name} desc={data.pisos[0].desc_corta} imgModal={data.pisos[0].portada}  />
                        <Modal modal={24} img={data.pisos[1].cara} titulo={data.pisos[1].name} desc={data.pisos[1].desc_corta} imgModal={data.pisos[1].portada}  />
                        <Modal modal={25} img={data.pisos[2].cara} titulo={data.pisos[2].name} desc={data.pisos[2].desc_corta} imgModal={data.pisos[2].portada}  />
                        <Modal modal={26} img={data.pisos[3].cara} titulo={data.pisos[3].name} desc={data.pisos[3].desc_corta} imgModal={data.pisos[3].portada}  />
                        <Modal modal={27} img={data.pisos[4].cara} titulo={data.pisos[4].name} desc={data.pisos[4].desc_corta} imgModal={data.pisos[4].portada}  />
                        <Modal modal={28} img={data.pisos[5].cara} titulo={data.pisos[5].name} desc={data.pisos[5].desc_corta} imgModal={data.pisos[5].portada}  />
                        <Modal modal={29} img={data.pisos[6].cara} titulo={data.pisos[6].name} desc={data.pisos[6].desc_corta} imgModal={data.pisos[6].portada}  />
                        <Modal modal={30} img={data.pisos[7].cara} titulo={data.pisos[7].name} desc={data.pisos[7].desc_corta} imgModal={data.pisos[7].portada}  />
                        <Modal modal={31} img={data.pisos[8].cara} titulo={data.pisos[8].name} desc={data.pisos[8].desc_corta} imgModal={data.pisos[8].portada}  />
                        <Modal modal={32} img={data.pisos[9].cara} titulo={data.pisos[9].name} desc={data.pisos[9].desc_corta} imgModal={data.pisos[9].portada}  />
                        <Modal modal={33} img={data.pisos[10].cara} titulo={data.pisos[10].name} desc={data.pisos[10].desc_corta} imgModal={data.pisos[10].portada} esUltimo />

                    </div>


                    
                </div>

                <div className="row">
                    
                </div>
            </div>

        </section>
    );

}



