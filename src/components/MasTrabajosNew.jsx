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


                        <Modal modal={1} img={assets.redondeta} titulo={data.pools[0].name} desc={data.pools[0].desc_corta} imgModal={data.pools[0].portada} esPrimero />  
                        <Modal modal={2} img={assets.escaloneta} titulo={data.pools[7].name} desc={data.pools[7].desc_corta} imgModal={data.pools[7].portada} />  
                        <Modal modal={3} img={assets.finlandesa} titulo={data.pools[1].name} desc={data.pools[1].desc_corta} imgModal={data.pools[1].portada} />  
                        <Modal modal={4} img={assets.argentineta} titulo={data.pools[2].name} desc={data.pools[2].desc_corta} imgModal={data.pools[2].portada} />  
                        <Modal modal={5} img={assets.fuente} titulo={data.pools[3].name} desc={data.pools[3].desc_corta} imgModal={data.pools[3].portada} />  
                        <Modal modal={6} img={assets.lgbt} titulo={data.pools[5].name} desc={data.pools[5].desc_corta} imgModal={data.pools[5].portada} />  
                        <Modal modal={7} img={assets.eggs} titulo={data.pools[8].name} desc={data.pools[8].desc_corta} imgModal={data.pools[8].portada} />  
                        <Modal modal={8} img={assets.clasica} titulo={data.pools[4].name} desc={data.pools[4].desc_corta} imgModal={data.pools[4].portada} />  
                        <Modal modal={9} img={assets.adefinir} titulo={data.pools[6].name} desc={data.pools[6].desc_corta} imgModal={data.pools[6].portada}/>  
                        <Modal modal={10} img={assets.tropical} titulo={data.pools[9].name} desc={data.pools[9].desc_corta} imgModal={data.pools[9].portada} esUltimo/>  


                        
                    </div>
                </div>

                <div className="row">
                    
                </div>
            </div>

        </section>
    );

}



