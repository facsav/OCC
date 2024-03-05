import React from 'react';

const NavItemWithImage = ({ imageSrc, alt, text, showImageOnMobile, ruta, type, databs, dataTarget  }) => {

  return (
    <li className="nav-item">
      <div className={`d-flex ${showImageOnMobile ? 'd-md-none' : ''}`}>
        {showImageOnMobile && <img src={imageSrc} alt={alt} />}
        <a className="nav-link" aria-current="page" href={ruta} type={type}  data-bs-toggle={databs} data-bs-target={dataTarget}>
          {text}
        </a>
      </div>
      <a className={`nav-link ${showImageOnMobile ? 'd-none d-md-block' : ''}`} aria-current="page" href={ruta} type={type}  data-bs-toggle={databs} data-bs-target={dataTarget} >
        {text}
      </a>
      {showImageOnMobile && <hr className="d-md-none" style={{ color: 'black' }} />}
    </li>
  );
};

export default NavItemWithImage;