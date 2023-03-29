import { NavLink } from 'react-router-dom';


export const Footer = () => {
  return (
    <>
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <h3>Acceso Rapido</h3>
                        <ul className="footer-list">
                        <li className="footer-item">
                            <NavLink 
                                to="/"
                                className={ ({ isActive }) => `footer-link ${ isActive ? 'active' : '' }`}
                                >
                                    Inicio
                            </NavLink>
                        </li>
                        <li className="footer-item">
                                <NavLink 
                                    to="/nosotros"
                                    className={ ({ isActive }) => `footer-link ${ isActive ? 'active' : '' }`}
                                >
                                    Sobre Nosotros
                                </NavLink>
                        </li>
                        <li className="footer-item">
                                <NavLink 
                                    to="/especialidad"
                                    className={ ({ isActive }) => `footer-link ${ isActive ? 'active' : '' }`}
                                >
                                    Especialidad y Servicios
                                </NavLink>
                        </li>
                        <li className="footer-item">
                            <NavLink 
                                to="/"
                                className={ ({ isActive }) => `footer-link ${ isActive ? 'active' : '' }`}
                            >
                                Blog
                            </NavLink>
                        </li>
                    </ul>
                    </div>
                     <div className="col-sm-4">
                        <h3>Blog</h3>
                        <div className="d-flex flex-column justify-content-center">
                            <input
                                type="text"
                                placeholder="Su correo electronico"
                            />
                            <button>
                                Suscribir
                            </button>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <h3>Contacto</h3>
                        <ul className="footer-list">
                            <li className="footer-item">Virginio Lema entre Issac Attie y Delgadillo.</li>
                        </ul>
                        <h3>Síguenos en Nuestras Redes Sociales</h3>
                        <ul className="footer-list-social">
                            <li className="footer-item-social">
                                <a href="https://www.facebook.com/clinicayapur" target="_blank" className="footer-link-social">
                                    <i className="fa-brands fa-facebook"></i>
                                </a>
                            </li>
                            <li className="footer-item-social">
                                <a href="" target="_blank" className="footer-link-social">
                                    <i className="fa-brands fa-instagram"></i>
                                </a>
                            </li>
                            <li className="footer-item-social">
                                <a href="" target="_blank" className="footer-link-social">
                                    <i className="fa-brands fa-tiktok"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        <div className="footer-body">
            <small><b>© 2022 Clinica Yapur</b></small>
        </div>
    </>
  )
}
