import {MenuItem} from "../components/MenuItem";
import {faChartLine, faChild, faFutbol, faUser} from "@fortawesome/free-solid-svg-icons";
import '../styles/MainMenu.css';
import React from "react";

export const MainMenu = () => (
    <nav id="mainMenu">
        <ul>
            <MenuItem id="games" href="/games" title="Games" icon={faFutbol}/>
            <MenuItem id="teams" href="/teams" title="Teams" icon={faChild}/>
            <MenuItem id="standings" href="/standings" title="Standings" icon={faChartLine}/>
            <MenuItem id="profile" href="#" title="My Profile" icon={faUser}/>
        </ul>
    </nav>
);