import React from 'react';
// import './navbar.scss'
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <header>
            <nav>
                <Link className='link' to="/">Home</Link>
                <Link className='link' to="/dos/dos">dos</Link>
                <Link className='link' to="/tres/tres">tres</Link>
                <Link className='link' to="/cuatro/cuatro">cuatro</Link>
                <Link className='link' to="/cinco/cinco">cinco</Link>
                <Link className='link' to="/seis/seis">seis</Link>
                <Link className='link' to="/prueba/prueba">Prueba</Link>
            </nav>
        </header>
    )
}

export default NavBar