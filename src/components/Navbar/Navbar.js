import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css';

export default function Navbar(){

    const links = [
        {string: 'Inicio', path: '/menza-studio/'}, 
        {string: 'Sobre Nosotros', path: '/menza-studio/sobre-nosotros'}, 
        {string: 'Servicios', path: '/menza-studio/servicios'}, 
        {string: 'Contacto', path: '/menza-studio/contacto'},
    ];

    return(
        <div className="navbar">
            <div className="navbar-elements">
                <div>
                    <NavLink >LOGO</NavLink>
                </div>
                <NavbarLinksList links={links}/>
            </div>
        </div>
    );
}

function NavbarLink({string, path}){

    return(
        <li>
            <NavLink className={'navbar-link'} to={path} onClick={()=>{window.scrollTo(0, 0);}}>
                {string}
            </NavLink>
        </li>
    );
}

function NavbarLinksList({links}){

    return(
        <ul className="navbar-links-list">
            {links.map((e, index)=> <NavbarLink key={index} string={e.string} path={e.path}/>)}
        </ul>
    );
}
