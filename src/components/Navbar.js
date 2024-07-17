import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar(){

    const links = [
        {string: 'Inicio', path: '/'}, 
        {string: 'Sobre Nosotros', path: '/'}, 
        {string: 'Servicios', path: '/'}, 
        {string: 'Contacto', path: '/'},
        {string: 'Esp/Eng', path: '/'},
    ];

    const style= {
        top: 0,
        left: 0,
        position: 'sticky',
        width: '100vw',
        backgroundColor: '#001233ff',
        color: 'white',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '10vh',
        boxShadow: '0 2px 4px 0 rgba(0,0,0,.2)',
    };

    const navbarElements = {
        width: '80vw',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }

    return(
        <div style={style}>
            <div style={navbarElements}>
                <div>
                    <NavLink >LOGO</NavLink>
                </div>
                <NavbarLinksList links={links}/>
            </div>
        </div>
    );
}

function NavbarLink({string, path}){
    const [isHovered, setIsHovered] = useState(false);

    const style = {
        display: 'inline-block',
        padding: '1vw',
        transition: 'all ease 0.5s ',
        color: isHovered ? '#001233ff' : 'white',
        backgroundColor: isHovered ? 'white' : 'transparent',
        borderRadius: '500px',
        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        margin: isHovered ? '0 10px' : '0',
    };

    return(
        <li>
            <NavLink 
            to={path} 
            style={style} 
            onMouseEnter={()=>setIsHovered(true)} 
            onMouseLeave={()=>setIsHovered(false)}
            >
            {string}
            </NavLink>
        </li>
    );
}

function NavbarLinksList({links}){

    return(
        <ul style={{
            display: 'flex', 
            flexDirection: 'row', 
            alignItems: 'center', 
            justifyContent: 'space-between',
             gap: '1vw',
        }}>
            {links.map((e, index)=> <NavbarLink key={index} string={e.string} path={e.path}/>)}
        </ul>
    );
}
