import React from "react";
import {Team} from "../components/Team";
import {MenuItem} from "../components/MenuItem";
import {faFutbol} from "@fortawesome/free-solid-svg-icons";

export const Games = () => (
    <div id="teamsMenu">
        <ul>
            <Team name="F.C. Barcelona" icon="fcb.png"/>
            <Team name="Manchester City" icon="city.png"/>
            <Team name="Liverpool F.C." icon="lvp.png"/>
            <Team name="Real Madrid C.F." icon="rmd.png"/>
            <Team name="Paris Saint Germain" icon="psg.png"/>
            <MenuItem href="/" title="Main Menu" icon={faFutbol}/>
        </ul>
    </div>
);