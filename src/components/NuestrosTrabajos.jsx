import React, { useEffect, useState } from 'react';
import '../styles/nuestrostrabjos.css'; // Asegúrate de ajustar la ruta
import Tilt from 'react-vanilla-tilt';
import assets from '../assets/assets';
import { Link } from 'react-router-dom';

const NuestrosTrabajos = ({ navbarHeight }) => {
  const [currentIndexFirst, setCurrentIndexFirst] = useState(0);
  const [backgroundImageFirst, setBackgroundImageFirst] = useState('');

  const imagesFirst = [assets.pileta1trabajos, assets.pileta2trabajos, assets.pileta3trabajos, assets.pileta4trabajos];

  useEffect(() => {
    // Cambiar el fondo cada segundo
    const intervalIdFirst = setInterval(() => {
      changeBackgroundFirst();
    }, 2000);

    return () => {
      clearInterval(intervalIdFirst);
    };
  }, [currentIndexFirst]);

  const changeBackgroundFirst = () => {
    setCurrentIndexFirst((prevIndex) => (prevIndex + 1) % imagesFirst.length);
  };

  useEffect(() => {
    setBackgroundImageFirst(`url(${imagesFirst[currentIndexFirst]})`);
  }, [currentIndexFirst]);

  // Segunda Tilt
  const [currentIndexSecond, setCurrentIndexSecond] = useState(0);
  const [backgroundImageSecond, setBackgroundImageSecond] = useState('');

  const imagesSecond = [assets.revestimientos1trabajos, assets.revestimientos2trabajos, assets.revestimientos3trabajos, assets.revestimientos4trabajos];

  useEffect(() => {
    // Cambiar el fondo cada segundo
    const intervalIdSecond = setInterval(() => {
      changeBackgroundSecond();
    }, 2000);

    return () => {
      clearInterval(intervalIdSecond);
    };
  }, [currentIndexSecond]);

  const changeBackgroundSecond = () => {
    setCurrentIndexSecond((prevIndex) => (prevIndex + 1) % imagesSecond.length);
  };

  useEffect(() => {
    setBackgroundImageSecond(`url(${imagesSecond[currentIndexSecond]})`);
  }, [currentIndexSecond]);
  return (
    <div className="container" id="cont-trabajos">
      <div className="row">
        <div className="col-12 col-md-6 justify-content-center align-items-center d-flex" id='primer-card'>
        <Link to="./Piletas" className='link-cards'>
          <Tilt
            className="card"
            options={{ max: 25, speed: 400 }}
            style={{
              backgroundImage: backgroundImageFirst
            }}
          >
            <div className="content text-center">
              <h3 style={{color:'#C06500'}}>Piscinas</h3>
            </div>
          </Tilt>
        </Link>
        </div>
        <div className="col-12 col-md-6 justify-content-center align-items-center d-flex" id='second-card'>
          <Link to="./Revestimientos" className="link-cards">
          <Tilt
            className="card"
            options={{ max: 25, speed: 400 }}
            style={{
              backgroundImage: backgroundImageSecond
            }}
          >
            <div className="content text-center">
              <h3 style={{color:'#05445E'}}>Revestimientos</h3>
            </div>
          </Tilt>
          </Link>
        </div>
      </div>
    </div>
  );
};
  
  export default NuestrosTrabajos;
  