import React from 'react'
import logo from '../../assets/img/Logo.png'
import '../../assets/styles/styles.css'
import {
    Link
} from 'react-router-dom'

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg d-flex">
                <div className="col-12 container-fluid">
                    <Link to="/">
                        <img src={logo} className="d-block w-100 h-10"
                            alt="/"
                            width="80"
                            height="80"
                            className="d-inline-block align-text-top" />
                    </Link>

                    <a className="text-white navbar-brand p-3" href="/">Learning Now

                    </a>


                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/">
                                    <a className="text-white nav-link active">Inicio</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/que_ofrecemos">
                                    <a className="text-white nav-link">¿Qué ofrecemos?</a>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contactenos">
                                    <a className="text-white nav-link">Contáctenos</a>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="botones-nav justify-content-end mx-1">

                        <Link to="/registro">

                            <button className="btn boton1 mx-1" type="submit">Registrarme</button>
                        </Link>

                        <Link to="/login">
                            <button className="btn boton1" type="submit">Iniciar sesión</button>
                        </Link>
                    </div>

                </div>
            </nav>
        </>

    )
}

export default Navbar