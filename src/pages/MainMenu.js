import {MenuItem} from "../components/MenuItem";
import {faChartLine, faChild, faFutbol, faUser} from "@fortawesome/free-solid-svg-icons";
import '../styles/MainMenu.css';
import React from "react";

export const MainMenu = () => (
    <nav id="mainMenu">
        <ul>
            <MenuItem id="games" href="/games" title="Partits" icon={faFutbol}/>
            <MenuItem id="teams" href="/teams" title="Equips" icon={faChild}/>
            <MenuItem id="standings" href="/standings" title="Classificació" icon={faChartLine}/>
            <MenuItem id="profile" href="#" title="Perfil" icon={faUser}/>
        </ul>
    </nav>
);