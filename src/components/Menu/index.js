import React from 'react';
import './Menu.css';
import Logo from '../../assets/img/Logo.png';
import Button from '../Button'
//import ButtonLink from './components/ButtonLink'


function Menu() {
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="Projeto logo" />
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    )
}

export default Menu;