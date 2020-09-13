import React from "react";
import {faFutbol} from "@fortawesome/free-solid-svg-icons";
import {Team} from "../components/Team";
import '../styles/Teams.css';
import {MenuItem} from "../components/MenuItem";

export const Teams = props => (
    <div id="teamsMenu">
        <ul>
            <Team name="Jue" icon="fcb.png"/>
            <Team name="Santi" icon="city.png"/>
            <Team name="Friky" icon="lvp.png"/>
            <Team name="Jordi" icon="rmd.png"/>
            <Team name="Tunet" icon="psg.png"/>
            <Team name="Montes" icon="juv.png"/>
            <MenuItem href="/" title="Main Menu" icon={faFutbol}/>
        </ul>
    </div>
);