import React from "react";
import {MenuItem} from "../components/MenuItem";
import {faFutbol} from "@fortawesome/free-solid-svg-icons";
import {StandingsItem} from "../components/StandingsItem";
import '../styles/Standings.css';

export const Standings = () => (
    <div id="standingsMenu">
        <ul>
            <StandingsItem points="12" name="F.C. Barcelona" icon="fcb.png"/>
            <StandingsItem points="10" name="Manchester City" icon="city.png"/>
            <StandingsItem points="9" name="Liverpool F.C." icon="lvp.png"/>
            <StandingsItem points="8" name="Real Madrid C.F." icon="rmd.png"/>
            <StandingsItem points="5" name="Paris Saint Germain" icon="psg.png"/>
            <MenuItem id="games" href="/" title="Main Menu" icon={faFutbol}/>
        </ul>
    </div>
);