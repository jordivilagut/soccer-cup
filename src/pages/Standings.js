import React from "react";
import {MenuItem} from "../components/MenuItem";
import {faFutbol} from "@fortawesome/free-solid-svg-icons";
import {StandingsItem} from "../components/StandingsItem";
import '../styles/Standings.css';

export const Standings = () => (
    <div id="standingsMenu">
        <ul>
            <StandingsItem points="16pts" name="Real Madrid" icon="rmd.png"/>
            <StandingsItem points="11pts" name="Man. City" icon="city.png"/>
            <StandingsItem points="10pts" name="Barcelona" icon="fcb.png"/>
            <StandingsItem points="9pts" name="Liverpool" icon="lvp.png"/>
            <StandingsItem points="8pts" name="Paris SG" icon="psg.png"/>
            <MenuItem id="games" href="/" title="Main Menu" icon={faFutbol}/>
        </ul>
    </div>
);