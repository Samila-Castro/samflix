import React from 'react';
import LogoMain from '../../assets/LogoMain.png';
import './Menu.css';
import Button from '../Button'
//import ButtonLink from './Componentes/ButtonLink';

function Menu() {


    return (
        <nav className="Menu">
            <a href="/">

           <img className="Logo" src={LogoMain} alt="AluraFlix logo"/>

           </a>

           <Button as="a" className="ButtonLink" href="/">

                Novo vídeo
           </Button>
        </nav>
    );
}

export default Menu;