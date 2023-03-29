import { Link, NavLink } from 'react-router-dom';

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
        <div className="container-fluid h-100">
            <Link className="navbar-brand" to="/">
                <img src="./assets/logo-yapur.png" alt="Clinica Yapur" style={{ width: 110 }}/>
            </Link>
            <div className="collapse navbar-collapse h-100 d-lg-flex justify-content-end d-none">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink 
                            to="/"
                            className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}
                            >
                            Inicio
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                            to="/nosotros"
                            className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}
                        >
                            Sobre Nosotros
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <span className="nav-link" style={{ cursor: 'pointer' }}>
                            Especialidad y Servicios
                        </span>
                        <ul className="sub-menu">
                            <li className="sub-menu-item">
                                <NavLink 
                                    to="/especialidad"
                                    className={ ({ isActive }) => `sub-menu-link ${ isActive ? 'active' : '' }`}
                                >
                                    Especialidad
                                </NavLink>
                            </li>
                            <li className="sub-menu-item">
                                <NavLink 
                                    to="/servicio"
                                    className={ ({ isActive }) => `sub-menu-link ${ isActive ? 'active' : '' }`}
                                >
                                    Servicio
                                </NavLink>
                            </li>
                        </ul>
                    </li>
                    <li className="nav-item">
                        <NavLink 
                            to="/blog"
                            className={ ({ isActive }) => `nav-link ${ isActive ? 'active' : '' }`}
                        >
                            Blog
                        </NavLink>
                    </li>
                </ul>
            </div>
            <a className="btn-event" href="https://wa.me/59175166619?text=Hola%20quiero%20agendar%20una%20cita" target="_blank">
                Agenda tu cita
            </a>
        </div>
    </nav>
  )
}
