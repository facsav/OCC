import assets from "../assets/assets";
import '../styles/App.css';
import { ContactUs } from "./ContactUs";
import footer from '../styles/Footer.css'


export function Footer(){
    return(
        <section id="footer" >
            {/* pc */}
            <div className="container text-center d-none d-lg-block">
                <div id="rowTop" className="row">
                    <div className="col">
                        <div>
                            <img src={assets.logoWhite} height={'50px'} alt="" />
                            <p>En OCC, <b>no existen límites</b> cuando se trata de revestir superficies. Ya sea que esté planificando una renovación en su hogar o que sea un arquitecto buscando pericia en revestimientos, estamos aquí para superar sus expectativas. Contáctenos para cualquier consulta; en OCC, la consigna es clara: <b>¡no hay superficie que no pueda ser revestida!</b></p>
                            <div>
                                <svg width="124" height="35" viewBox="0 0 124 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M79.3231 17.7729C79.3231 8.14815 71.5688 0.346191 62.0046 0.346191C52.4362 0.348356 44.6819 8.14815 44.6819 17.775C44.6819 26.4711 51.0161 33.6799 59.2943 34.9874V22.8104H54.8998V17.775H59.2986V13.9325C59.2986 9.56609 61.8856 7.1545 65.8407 7.1545C67.7371 7.1545 69.7178 7.49438 69.7178 7.49438V11.7807H67.5336C65.3839 11.7807 64.7128 13.125 64.7128 14.504V17.7729H69.5144L68.748 22.8082H64.7107V34.9852C72.9889 33.6777 79.3231 26.4689 79.3231 17.7729Z" fill="white"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M106.508 34.9832C116.169 34.9832 124 27.152 124 17.4916C124 7.83126 116.169 0 106.508 0C96.8481 0 89.0168 7.83126 89.0168 17.4916C89.0168 27.152 96.8481 34.9832 106.508 34.9832ZM115.92 14.3341C115.92 20.2189 111.487 27.0167 103.383 27.0167C100.993 27.0175 98.6525 26.3268 96.6372 25.0261C96.9846 25.0684 97.3342 25.0888 97.6841 25.0873C99.6697 25.0906 101.599 24.4171 103.16 23.1755C102.241 23.159 101.35 22.8518 100.612 22.297C99.8735 21.7422 99.3253 20.9676 99.0437 20.0816C99.3153 20.134 99.5913 20.1599 99.8678 20.1591C100.26 20.1608 100.651 20.1083 101.029 20.0028C100.033 19.7975 99.1369 19.2502 98.4932 18.4535C97.8496 17.6568 97.4974 16.6596 97.4962 15.6303V15.5692C98.1089 15.9096 98.7921 16.0995 99.4906 16.1236C98.5584 15.4925 97.8984 14.5258 97.6447 13.42C97.3909 12.3141 97.5624 11.152 98.1243 10.1695C99.2312 11.547 100.612 12.6737 102.176 13.4763C103.741 14.279 105.455 14.7397 107.207 14.8287C106.987 13.872 107.085 12.8686 107.485 11.974C107.886 11.0793 108.566 10.3433 109.422 9.87998C110.277 9.41662 111.26 9.25177 112.217 9.41096C113.175 9.57015 114.054 10.0445 114.718 10.7605C115.706 10.5667 116.653 10.2023 117.519 9.68304C117.188 10.717 116.498 11.5943 115.577 12.1519C116.451 12.0451 117.306 11.8079 118.112 11.4481C117.52 12.3451 116.775 13.1282 115.912 13.7607C115.92 13.9509 115.92 14.1438 115.92 14.3341Z" fill="white"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M17.4916 34.9832C27.152 34.9832 34.9832 27.152 34.9832 17.4916C34.9832 7.83126 27.152 0 17.4916 0C7.83126 0 0 7.83126 0 17.4916C0 27.152 7.83126 34.9832 17.4916 34.9832ZM12.8931 6.99182C14.0379 6.94082 14.4044 6.9274 17.3182 6.9274H17.3155C20.2334 6.9274 20.5972 6.94082 21.7434 6.99182C22.8856 7.04417 23.6667 7.22536 24.3512 7.49112C25.068 7.76042 25.7171 8.18324 26.2531 8.72995C26.7993 9.26638 27.2221 9.91539 27.4919 10.6318C27.7564 11.3136 27.9375 12.0948 27.9912 13.237C28.0422 14.3832 28.0557 14.7483 28.0557 17.6648C28.0557 20.5814 28.0422 20.9465 27.9912 22.0913C27.9375 23.2349 27.7564 24.0147 27.4919 24.6978C27.2168 25.4038 26.8504 26.0024 26.2531 26.5997C25.7173 27.1461 25.0687 27.5689 24.3526 27.8385C23.6694 28.1043 22.8869 28.2841 21.7447 28.3378C20.5985 28.3888 20.2348 28.4023 17.3182 28.4023C14.4017 28.4023 14.0366 28.3888 12.8904 28.3378C11.7468 28.2855 10.9684 28.1043 10.2839 27.8385C9.57788 27.5647 8.97927 27.197 8.38334 26.5997C7.78608 26.0024 7.41966 25.4038 7.14451 24.6978C6.87876 24.0147 6.69891 23.2349 6.64522 22.0913C6.59422 20.9465 6.5808 20.5814 6.5808 17.6662C6.5808 14.7483 6.59422 14.3832 6.64522 13.2356C6.69757 12.0948 6.87876 11.3136 7.14451 10.6318C7.41444 9.91541 7.83718 9.26641 8.38334 8.72995C8.91953 8.18345 9.56861 7.76065 10.2852 7.49112C10.9684 7.22536 11.7482 7.04551 12.8931 6.99182ZM17.3196 8.86282H16.3559V8.86014C14.3547 8.86148 13.9708 8.8749 12.9803 8.92054C11.9334 8.96885 11.3657 9.14334 10.9872 9.29098C10.4852 9.48559 10.1282 9.71779 9.75237 10.0936C9.37656 10.4694 9.14302 10.8278 8.9484 11.3284C8.80076 11.7069 8.62628 12.276 8.57796 13.3229C8.52696 14.4543 8.51622 14.7926 8.51622 17.6595C8.51622 20.5277 8.52696 20.8673 8.57796 21.9987C8.62494 23.0456 8.80076 23.6147 8.94706 23.9919C9.11983 24.4585 9.39501 24.8804 9.75237 25.2267C10.0988 25.5831 10.5208 25.8574 10.9872 26.0293C11.3657 26.1769 11.9334 26.3514 12.9803 26.3997C14.1118 26.4507 14.4527 26.4628 17.3196 26.4628C20.1865 26.4628 20.526 26.4507 21.6575 26.3997C22.7057 26.3514 23.2748 26.1769 23.6506 26.0293C24.1526 25.8347 24.5096 25.6025 24.8854 25.2267C25.2425 24.881 25.5173 24.4594 25.6894 23.9932C25.8357 23.6147 26.0115 23.047 26.0585 22.0001C26.1108 20.8686 26.1216 20.5277 26.1216 17.6621C26.1216 14.7966 26.1108 14.457 26.0585 13.3256C26.0115 12.2787 25.837 11.7096 25.6894 11.3324C25.4948 10.8305 25.2626 10.4734 24.8868 10.0976C24.511 9.72182 24.1526 9.48828 23.652 9.29366C23.2735 9.14736 22.7044 8.97154 21.6575 8.92456C20.526 8.87222 20.1865 8.86282 17.3196 8.86282ZM22.5576 10.7433C22.7139 10.6786 22.8815 10.6452 23.0507 10.6452C23.3924 10.6452 23.7201 10.781 23.9618 11.0226C24.2034 11.2643 24.3392 11.592 24.3392 11.9337C24.3392 12.2755 24.2034 12.6032 23.9618 12.8448C23.7201 13.0865 23.3924 13.2222 23.0507 13.2222C22.8815 13.2222 22.7139 13.1889 22.5576 13.1241C22.4013 13.0594 22.2592 12.9645 22.1396 12.8448C22.0199 12.7252 21.925 12.5831 21.8603 12.4268C21.7955 12.2705 21.7622 12.1029 21.7622 11.9337C21.7622 11.7645 21.7955 11.597 21.8603 11.4406C21.925 11.2843 22.0199 11.1423 22.1396 11.0226C22.2592 10.903 22.4013 10.8081 22.5576 10.7433ZM15.1828 12.5459C15.8618 12.2739 16.5882 12.1397 17.3196 12.1512C18.7672 12.1737 20.1478 12.7647 21.1635 13.7963C22.1793 14.828 22.7486 16.2177 22.7486 17.6655C22.7486 19.1133 22.1793 20.503 21.1635 21.5347C20.1478 22.5663 18.7672 23.1573 17.3196 23.1798C16.5882 23.1913 15.8618 23.0571 15.1828 22.7851C14.5038 22.5131 13.8856 22.1087 13.3644 21.5955C12.8431 21.0823 12.4292 20.4706 12.1466 19.7959C11.864 19.1212 11.7185 18.397 11.7185 17.6655C11.7185 16.934 11.864 16.2098 12.1466 15.5351C12.4292 14.8604 12.8431 14.2487 13.3644 13.7355C13.8856 13.2223 14.5038 12.8179 15.1828 12.5459ZM19.8507 15.1337C19.1794 14.4624 18.2689 14.0852 17.3196 14.0852C16.3702 14.0852 15.4597 14.4624 14.7884 15.1337C14.1171 15.805 13.74 16.7155 13.74 17.6648C13.74 18.6142 14.1171 19.5247 14.7884 20.196C15.4597 20.8673 16.3702 21.2444 17.3196 21.2444C18.2689 21.2444 19.1794 20.8673 19.8507 20.196C20.522 19.5247 20.8992 18.6142 20.8992 17.6648C20.8992 16.7155 20.522 15.805 19.8507 15.1337Z" fill="white"/>
                                </svg>
                            </div>
                        </div>
                        <div>
                            <div className="d-flex justify-content-around">
                                <ul>
                                    <h5>Paginas</h5>
                                    <br />
                                    <li>
                                        <a href="/">Home</a>
                                    </li>
                                    <li>
                                        <a href="/SobreNosotros">Nosotros</a>
                                    </li>
                                    <li>
                                        <a href="/NuestrosTrabajos">Trabajos</a>
                                    </li>
                                    <li>
                                        <a href="/NuestrosTrabajos/Piletas">Piletas</a>
                                    </li>
                                    <li>
                                        <a href="/NuestrosTrabajos/Revestimientos">Revestimientos</a>
                                    </li>
                                    <li>
                                        <a type='button' data-bs-toggle='modal' data-bs-target='#exampleModal' href="#">Contacto</a>
                                    </li>
                                </ul>
                                <ul>
                                    <h5>Contacto</h5>
                                    <br />
                                    {/* <li>- Telefono:</li> */}
                                    <li>
                                        <a href="tel:+54 9 1122247366">+54 9 11-2224-7366</a>
                                    </li>
                                    {/* <li>- Email:</li> */}
                                    <li>
                                        <a href="mailto:occmarbletile@gmail.com">occmarbletile@gmail.com</a>
                                    </li>
                                    <li>- Donde estamos:</li>
                                    <li><a href="https://maps.app.goo.gl/EtvzxhVFP5qsQPdt7">Almirante Solier 473, Villa Sarmiento</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <hr />
                        <p>©2023 OCC. All Rights Reserved.</p>
                    </div>
                </div>
            </div>

            {/* phone */}

            <div className="container text-center d-lg-none">
                <div className="row">
                    <div className="col">
                        <div>
                            <img src={assets.logoWhite} height={'50px'} alt="" />
                            <div className="redes">
                                <svg width="124" height="35" viewBox="0 0 124 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M79.3231 17.7729C79.3231 8.14815 71.5688 0.346191 62.0046 0.346191C52.4362 0.348356 44.6819 8.14815 44.6819 17.775C44.6819 26.4711 51.0161 33.6799 59.2943 34.9874V22.8104H54.8998V17.775H59.2986V13.9325C59.2986 9.56609 61.8856 7.1545 65.8407 7.1545C67.7371 7.1545 69.7178 7.49438 69.7178 7.49438V11.7807H67.5336C65.3839 11.7807 64.7128 13.125 64.7128 14.504V17.7729H69.5144L68.748 22.8082H64.7107V34.9852C72.9889 33.6777 79.3231 26.4689 79.3231 17.7729Z" fill="white"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M106.508 34.9832C116.169 34.9832 124 27.152 124 17.4916C124 7.83126 116.169 0 106.508 0C96.8481 0 89.0168 7.83126 89.0168 17.4916C89.0168 27.152 96.8481 34.9832 106.508 34.9832ZM115.92 14.3341C115.92 20.2189 111.487 27.0167 103.383 27.0167C100.993 27.0175 98.6525 26.3268 96.6372 25.0261C96.9846 25.0684 97.3342 25.0888 97.6841 25.0873C99.6697 25.0906 101.599 24.4171 103.16 23.1755C102.241 23.159 101.35 22.8518 100.612 22.297C99.8735 21.7422 99.3253 20.9676 99.0437 20.0816C99.3153 20.134 99.5913 20.1599 99.8678 20.1591C100.26 20.1608 100.651 20.1083 101.029 20.0028C100.033 19.7975 99.1369 19.2502 98.4932 18.4535C97.8496 17.6568 97.4974 16.6596 97.4962 15.6303V15.5692C98.1089 15.9096 98.7921 16.0995 99.4906 16.1236C98.5584 15.4925 97.8984 14.5258 97.6447 13.42C97.3909 12.3141 97.5624 11.152 98.1243 10.1695C99.2312 11.547 100.612 12.6737 102.176 13.4763C103.741 14.279 105.455 14.7397 107.207 14.8287C106.987 13.872 107.085 12.8686 107.485 11.974C107.886 11.0793 108.566 10.3433 109.422 9.87998C110.277 9.41662 111.26 9.25177 112.217 9.41096C113.175 9.57015 114.054 10.0445 114.718 10.7605C115.706 10.5667 116.653 10.2023 117.519 9.68304C117.188 10.717 116.498 11.5943 115.577 12.1519C116.451 12.0451 117.306 11.8079 118.112 11.4481C117.52 12.3451 116.775 13.1282 115.912 13.7607C115.92 13.9509 115.92 14.1438 115.92 14.3341Z" fill="white"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M17.4916 34.9832C27.152 34.9832 34.9832 27.152 34.9832 17.4916C34.9832 7.83126 27.152 0 17.4916 0C7.83126 0 0 7.83126 0 17.4916C0 27.152 7.83126 34.9832 17.4916 34.9832ZM12.8931 6.99182C14.0379 6.94082 14.4044 6.9274 17.3182 6.9274H17.3155C20.2334 6.9274 20.5972 6.94082 21.7434 6.99182C22.8856 7.04417 23.6667 7.22536 24.3512 7.49112C25.068 7.76042 25.7171 8.18324 26.2531 8.72995C26.7993 9.26638 27.2221 9.91539 27.4919 10.6318C27.7564 11.3136 27.9375 12.0948 27.9912 13.237C28.0422 14.3832 28.0557 14.7483 28.0557 17.6648C28.0557 20.5814 28.0422 20.9465 27.9912 22.0913C27.9375 23.2349 27.7564 24.0147 27.4919 24.6978C27.2168 25.4038 26.8504 26.0024 26.2531 26.5997C25.7173 27.1461 25.0687 27.5689 24.3526 27.8385C23.6694 28.1043 22.8869 28.2841 21.7447 28.3378C20.5985 28.3888 20.2348 28.4023 17.3182 28.4023C14.4017 28.4023 14.0366 28.3888 12.8904 28.3378C11.7468 28.2855 10.9684 28.1043 10.2839 27.8385C9.57788 27.5647 8.97927 27.197 8.38334 26.5997C7.78608 26.0024 7.41966 25.4038 7.14451 24.6978C6.87876 24.0147 6.69891 23.2349 6.64522 22.0913C6.59422 20.9465 6.5808 20.5814 6.5808 17.6662C6.5808 14.7483 6.59422 14.3832 6.64522 13.2356C6.69757 12.0948 6.87876 11.3136 7.14451 10.6318C7.41444 9.91541 7.83718 9.26641 8.38334 8.72995C8.91953 8.18345 9.56861 7.76065 10.2852 7.49112C10.9684 7.22536 11.7482 7.04551 12.8931 6.99182ZM17.3196 8.86282H16.3559V8.86014C14.3547 8.86148 13.9708 8.8749 12.9803 8.92054C11.9334 8.96885 11.3657 9.14334 10.9872 9.29098C10.4852 9.48559 10.1282 9.71779 9.75237 10.0936C9.37656 10.4694 9.14302 10.8278 8.9484 11.3284C8.80076 11.7069 8.62628 12.276 8.57796 13.3229C8.52696 14.4543 8.51622 14.7926 8.51622 17.6595C8.51622 20.5277 8.52696 20.8673 8.57796 21.9987C8.62494 23.0456 8.80076 23.6147 8.94706 23.9919C9.11983 24.4585 9.39501 24.8804 9.75237 25.2267C10.0988 25.5831 10.5208 25.8574 10.9872 26.0293C11.3657 26.1769 11.9334 26.3514 12.9803 26.3997C14.1118 26.4507 14.4527 26.4628 17.3196 26.4628C20.1865 26.4628 20.526 26.4507 21.6575 26.3997C22.7057 26.3514 23.2748 26.1769 23.6506 26.0293C24.1526 25.8347 24.5096 25.6025 24.8854 25.2267C25.2425 24.881 25.5173 24.4594 25.6894 23.9932C25.8357 23.6147 26.0115 23.047 26.0585 22.0001C26.1108 20.8686 26.1216 20.5277 26.1216 17.6621C26.1216 14.7966 26.1108 14.457 26.0585 13.3256C26.0115 12.2787 25.837 11.7096 25.6894 11.3324C25.4948 10.8305 25.2626 10.4734 24.8868 10.0976C24.511 9.72182 24.1526 9.48828 23.652 9.29366C23.2735 9.14736 22.7044 8.97154 21.6575 8.92456C20.526 8.87222 20.1865 8.86282 17.3196 8.86282ZM22.5576 10.7433C22.7139 10.6786 22.8815 10.6452 23.0507 10.6452C23.3924 10.6452 23.7201 10.781 23.9618 11.0226C24.2034 11.2643 24.3392 11.592 24.3392 11.9337C24.3392 12.2755 24.2034 12.6032 23.9618 12.8448C23.7201 13.0865 23.3924 13.2222 23.0507 13.2222C22.8815 13.2222 22.7139 13.1889 22.5576 13.1241C22.4013 13.0594 22.2592 12.9645 22.1396 12.8448C22.0199 12.7252 21.925 12.5831 21.8603 12.4268C21.7955 12.2705 21.7622 12.1029 21.7622 11.9337C21.7622 11.7645 21.7955 11.597 21.8603 11.4406C21.925 11.2843 22.0199 11.1423 22.1396 11.0226C22.2592 10.903 22.4013 10.8081 22.5576 10.7433ZM15.1828 12.5459C15.8618 12.2739 16.5882 12.1397 17.3196 12.1512C18.7672 12.1737 20.1478 12.7647 21.1635 13.7963C22.1793 14.828 22.7486 16.2177 22.7486 17.6655C22.7486 19.1133 22.1793 20.503 21.1635 21.5347C20.1478 22.5663 18.7672 23.1573 17.3196 23.1798C16.5882 23.1913 15.8618 23.0571 15.1828 22.7851C14.5038 22.5131 13.8856 22.1087 13.3644 21.5955C12.8431 21.0823 12.4292 20.4706 12.1466 19.7959C11.864 19.1212 11.7185 18.397 11.7185 17.6655C11.7185 16.934 11.864 16.2098 12.1466 15.5351C12.4292 14.8604 12.8431 14.2487 13.3644 13.7355C13.8856 13.2223 14.5038 12.8179 15.1828 12.5459ZM19.8507 15.1337C19.1794 14.4624 18.2689 14.0852 17.3196 14.0852C16.3702 14.0852 15.4597 14.4624 14.7884 15.1337C14.1171 15.805 13.74 16.7155 13.74 17.6648C13.74 18.6142 14.1171 19.5247 14.7884 20.196C15.4597 20.8673 16.3702 21.2444 17.3196 21.2444C18.2689 21.2444 19.1794 20.8673 19.8507 20.196C20.522 19.5247 20.8992 18.6142 20.8992 17.6648C20.8992 16.7155 20.522 15.805 19.8507 15.1337Z" fill="white"/>
                                </svg>
                            </div>
                            <p>En OCC, <b>no existen límites</b> cuando se trata de revestir superficies. Ya sea que esté planificando una renovación en su hogar o que sea un arquitecto buscando pericia en revestimientos, estamos aquí para superar sus expectativas. Contáctenos para cualquier consulta; en OCC, la consigna es clara: <b>¡no hay superficie que no pueda ser revestida!</b></p>
                        </div>
                        <hr />
                        <div className="listas">
                            <h5>Paginas</h5>
                            <ul>
                                <br />
                                <li>
                                        <a href="/">Home</a>
                                    </li>
                                    <li>
                                        <a href="#">Sobre Nosotros</a>
                                    </li>
                                    <li>
                                        <a href="/NuestrosTrabajos">Nuestros trabajos</a>
                                    </li>
                                    <li>
                                        <a href="/NuestrosTrabajos/Piletas">Piletas</a>
                                    </li>
                                    <li>
                                        <a href="/NuestrosTrabajos/Revestimientos">Revestimientos</a>
                                    </li>
                                    <li>
                                        <a type='button' data-bs-toggle='modal' data-bs-target='#exampleModal' href="#">Contacto</a>
                                    </li>
                            </ul>
                            <h5>Contacto</h5>       
                            <ul>
                                {/* <li>- Telefono:</li> */}
                                <li>
                                    <a href="tel:+54 9 1122247366">+54 9 11-2224-7366</a>
                                </li>
                                {/* <li>- Email:</li> */}
                                <li>
                                    <a href="mailto:occmarbletile@gmail.com">occmarbletile@gmail.com</a>
                                </li>
                                <li><a href="https://maps.app.goo.gl/EtvzxhVFP5qsQPdt7">Almirante Solier 473, Villa Sarmiento</a></li>
                            </ul>
                        </div>
                        <hr />
                        <p>©2023 OCC. All Rights Reserved.</p>
                    </div>
                </div>
            </div>

            {/* IGNORAR MODAL */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div id="modalTamaño" className="modal-dialog modal-dialog-centered " >
            <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Contactanos!</h1>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                
                <div className="container">
                    
                <ContactUs/>
                </div>

                <div className="modal-footer">
                    <br />
                </div>
            </div>
        </div>
            </div>
        </section>

        
    )
}