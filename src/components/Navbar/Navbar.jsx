import React from 'react';
import NavItemWithImage from './NavItemWithImage.jsx';
import DarkMode from '../DarkMode';
import assets from '../../assets/assets'; 


const Navbar = () => {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="www.google.com">
            <img src={assets.logo} alt="OCC" width="50" height="50" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav d-flex justify-content-md-end align-items-md-center">
              <NavItemWithImage imageSrc={assets.casa} alt="Casa" text="Home" showImageOnMobile={true} ruta='/' />
              <NavItemWithImage imageSrc={assets.info} alt="Info" text="Sobre nosotros" showImageOnMobile={true} />
              <NavItemWithImage imageSrc={assets.bolso} alt="Bolso" text="Nuestros trabajos" showImageOnMobile={true} ruta='/NuestrosTrabajos' />
              <NavItemWithImage imageSrc={assets.telefono} alt="Teléfono" text="Contacto" showImageOnMobile={true} />
              <li>
                <a className="nav-link" href="#">
                  <DarkMode  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;